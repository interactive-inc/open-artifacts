import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex gap-2 p-4">
      <Link to="/shop">
        <Button>{"shop"}</Button>
      </Link>
      <Link to="/corporate">
        <Button>{"会社サイト"}</Button>
      </Link>
      <Link to="/sns">
        <Button>{"SNS"}</Button>
      </Link>
    </div>
  )
}
