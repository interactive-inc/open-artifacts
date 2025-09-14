import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-4">
      <Link to="/shop">
        <Button>{"shop"}</Button>
      </Link>
    </div>
  )
}
