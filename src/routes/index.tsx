import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-4">
      <h1 className="mb-4 font-bold text-3xl">こんにちは</h1>
      <p className="mb-6 text-lg">こんにちは</p>
      <Link to="/shop">
        <Button>{"shop"}</Button>
      </Link>
    </div>
  )
}
