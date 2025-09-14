import { createFileRoute, Link } from "@tanstack/react-router"
import { CheckCircle, CreditCard, Truck } from "lucide-react"
import { useId, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { ShopFooter } from "@/routes/shop/-components/shop-footer"
import { ShopHeader } from "@/routes/shop/-components/shop-header"

export const Route = createFileRoute("/shop/checkout")({
  component: Checkout,
})

function Checkout() {
  const [step, setStep] = useState(1)

  // Generate unique IDs for form elements
  const lastNameId = useId()
  const firstNameId = useId()
  const emailId = useId()
  const phoneId = useId()
  const postalCodeId = useId()
  const prefectureId = useId()
  const cityId = useId()
  const addressId = useId()
  const buildingId = useId()
  const creditId = useId()
  const bankId = useId()
  const codId = useId()
  const cardNumberId = useId()
  const expiryId = useId()
  const cvvId = useId()

  const [shippingInfo, setShippingInfo] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    postalCode: "",
    prefecture: "",
    city: "",
    address: "",
    building: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("credit")

  const cartItems = [
    {
      id: "item-1",
      name: "プレミアム ワイヤレスヘッドホン",
      price: 29800,
      quantity: 1,
    },
    {
      id: "item-2",
      name: "レザービジネスバッグ",
      price: 38000,
      quantity: 1,
    },
    {
      id: "item-3",
      name: "オーガニックコットン Tシャツ",
      price: 3900,
      quantity: 2,
    },
  ]

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )
  const shipping = 0
  const tax = Math.floor(subtotal * 0.1)
  const total = subtotal + shipping + tax

  if (step === 3) {
    return (
      <div className="flex min-h-screen flex-col">
        <ShopHeader />

        <main className="flex flex-1 justify-center">
          <div className="w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
              <h1 className="mt-4 font-bold text-3xl">
                ご注文ありがとうございます！
              </h1>
              <p className="mt-2 text-muted-foreground">
                注文番号: #2024-12345
              </p>
              <p className="mt-4">
                ご注文内容の確認メールをお送りしました。
                <br />
                商品の発送準備が整い次第、発送通知をお送りします。
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Link to="/shop/orders">
                  <Button>注文履歴を見る</Button>
                </Link>
                <Link to="/shop/products">
                  <Button variant="outline">買い物を続ける</Button>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <ShopFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ShopHeader />

      <main className="flex flex-1 justify-center">
        <div className="w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="mb-8 font-bold text-3xl">チェックアウト</h1>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 1 ? "bg-primary text-white" : "bg-gray-200"
                  }`}
                >
                  1
                </div>
                <span className="ml-2 text-sm">配送情報</span>
              </div>
              <div className="mx-4 h-0.5 w-24 bg-gray-200" />
              <div className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 2 ? "bg-primary text-white" : "bg-gray-200"
                  }`}
                >
                  2
                </div>
                <span className="ml-2 text-sm">お支払い</span>
              </div>
              <div className="mx-4 h-0.5 w-24 bg-gray-200" />
              <div className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 3 ? "bg-primary text-white" : "bg-gray-200"
                  }`}
                >
                  3
                </div>
                <span className="ml-2 text-sm">完了</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {step === 1 && (
                <div className="rounded-lg border p-6">
                  <h2 className="mb-6 font-semibold text-xl">
                    <Truck className="mr-2 inline h-5 w-5" />
                    配送先情報
                  </h2>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={lastNameId}>姓</Label>
                        <Input
                          id={lastNameId}
                          value={shippingInfo.lastName}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              lastName: e.target.value,
                            })
                          }
                          placeholder="山田"
                        />
                      </div>
                      <div>
                        <Label htmlFor={firstNameId}>名</Label>
                        <Input
                          id={firstNameId}
                          value={shippingInfo.firstName}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              firstName: e.target.value,
                            })
                          }
                          placeholder="太郎"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor={emailId}>メールアドレス</Label>
                      <Input
                        id={emailId}
                        type="email"
                        value={shippingInfo.email}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            email: e.target.value,
                          })
                        }
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor={phoneId}>電話番号</Label>
                      <Input
                        id={phoneId}
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            phone: e.target.value,
                          })
                        }
                        placeholder="090-1234-5678"
                      />
                    </div>

                    <div>
                      <Label htmlFor={postalCodeId}>郵便番号</Label>
                      <Input
                        id={postalCodeId}
                        value={shippingInfo.postalCode}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            postalCode: e.target.value,
                          })
                        }
                        placeholder="123-4567"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={prefectureId}>都道府県</Label>
                        <Input
                          id={prefectureId}
                          value={shippingInfo.prefecture}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              prefecture: e.target.value,
                            })
                          }
                          placeholder="東京都"
                        />
                      </div>
                      <div>
                        <Label htmlFor={cityId}>市区町村</Label>
                        <Input
                          id={cityId}
                          value={shippingInfo.city}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              city: e.target.value,
                            })
                          }
                          placeholder="渋谷区"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor={addressId}>番地</Label>
                      <Input
                        id={addressId}
                        value={shippingInfo.address}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            address: e.target.value,
                          })
                        }
                        placeholder="1-2-3"
                      />
                    </div>

                    <div>
                      <Label htmlFor={buildingId}>
                        建物名・部屋番号（任意）
                      </Label>
                      <Input
                        id={buildingId}
                        value={shippingInfo.building}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            building: e.target.value,
                          })
                        }
                        placeholder="〇〇マンション 101号室"
                      />
                    </div>
                  </div>

                  <Button className="mt-6 w-full" onClick={() => setStep(2)}>
                    お支払いへ進む
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="rounded-lg border p-6">
                  <h2 className="mb-6 font-semibold text-xl">
                    <CreditCard className="mr-2 inline h-5 w-5" />
                    お支払い方法
                  </h2>

                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2 rounded-lg border p-4">
                        <RadioGroupItem value="credit" id={creditId} />
                        <div className="flex-1">
                          <Label htmlFor={creditId} className="cursor-pointer">
                            <div className="font-semibold">
                              クレジットカード
                            </div>
                            <div className="text-muted-foreground text-sm">
                              Visa, Mastercard, JCB, American Express
                            </div>
                          </Label>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 rounded-lg border p-4">
                        <RadioGroupItem value="bank" id={bankId} />
                        <div className="flex-1">
                          <Label htmlFor={bankId} className="cursor-pointer">
                            <div className="font-semibold">銀行振込</div>
                            <div className="text-muted-foreground text-sm">
                              ご注文後に振込先をメールでお送りします
                            </div>
                          </Label>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 rounded-lg border p-4">
                        <RadioGroupItem value="cod" id={codId} />
                        <div className="flex-1">
                          <Label htmlFor={codId} className="cursor-pointer">
                            <div className="font-semibold">代金引換</div>
                            <div className="text-muted-foreground text-sm">
                              商品お届け時にお支払い（手数料330円）
                            </div>
                          </Label>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit" && (
                    <div className="mt-6 space-y-4 rounded-lg bg-gray-50 p-4">
                      <div>
                        <Label htmlFor={cardNumberId}>カード番号</Label>
                        <Input
                          id={cardNumberId}
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={expiryId}>有効期限</Label>
                          <Input id={expiryId} placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor={cvvId}>セキュリティコード</Label>
                          <Input id={cvvId} placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep(1)}
                    >
                      戻る
                    </Button>
                    <Button className="flex-1" onClick={() => setStep(3)}>
                      注文を確定する
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <div className="rounded-lg border p-6">
                <h2 className="mb-4 font-semibold text-lg">注文内容</h2>

                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>
                        ¥{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>小計</span>
                    <span>¥{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>配送料</span>
                    <span>無料</span>
                  </div>
                  <div className="flex justify-between">
                    <span>消費税</span>
                    <span>¥{tax.toLocaleString()}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between font-semibold text-lg">
                  <span>合計</span>
                  <span>¥{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ShopFooter />
    </div>
  )
}
