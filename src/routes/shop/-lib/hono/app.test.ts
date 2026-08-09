import { beforeEach, describe, expect, it } from "vite-plus/test"
import { hono } from "./app"
import { carts, orders, products } from "./store"

const jsonHeaders = { "content-type": "application/json" }

beforeEach(() => {
  carts.clear()
  orders.clear()
})

describe("shop API", () => {
  it("uses the catalog price and shares cart state across routes", async () => {
    const product = products[0]
    const addResponse = await hono.request("/shop/api/cart/user-1/items", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify({ productId: product.id, quantity: 2 }),
    })

    expect(addResponse.status).toBe(200)
    expect(await addResponse.json()).toMatchObject({
      total: product.price * 2,
      items: [{ productId: product.id, quantity: 2, price: product.price }],
    })

    const deleteResponse = await hono.request(`/shop/api/cart/user-1/items/${product.id}`, {
      method: "DELETE",
    })
    expect(deleteResponse.status).toBe(200)
    expect(await deleteResponse.json()).toMatchObject({ items: [], total: 0 })
  })

  it("rejects invalid cart quantities", async () => {
    const response = await hono.request("/shop/api/cart/user-1/items", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify({ productId: products[0].id, quantity: 0 }),
    })

    expect(response.status).toBe(400)
  })

  it("creates, reads, and updates an order from trusted product data", async () => {
    const product = products[0]
    const createResponse = await hono.request("/shop/api/orders", {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify({
        userId: "user-1",
        items: [{ productId: product.id, quantity: 2 }],
        shippingAddress: {
          name: "山田 太郎",
          address: "東京都千代田区1-1",
          city: "千代田区",
          postalCode: "100-0001",
          phone: "090-0000-0000",
        },
      }),
    })

    expect(createResponse.status).toBe(201)
    const created = await createResponse.json()
    expect(created).toMatchObject({
      userId: "user-1",
      total: Math.floor(product.price * 2 * 1.1),
      status: "pending",
      items: [
        {
          productId: product.id,
          productName: product.name,
          quantity: 2,
          price: product.price,
          subtotal: product.price * 2,
        },
      ],
    })

    const getResponse = await hono.request(`/shop/api/orders/${created.id}`)
    expect(getResponse.status).toBe(200)
    expect(await getResponse.json()).toEqual(created)

    const updateResponse = await hono.request(`/shop/api/orders/${created.id}/status`, {
      method: "PATCH",
      headers: jsonHeaders,
      body: JSON.stringify({ status: "shipped" }),
    })
    expect(updateResponse.status).toBe(200)
    expect(await updateResponse.json()).toMatchObject({ status: "shipped" })
  })
})
