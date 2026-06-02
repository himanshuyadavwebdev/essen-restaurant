"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import {
  IconPlus,
  IconMinus,
  IconTrash,
  IconShoppingBag,
  IconClock,
  IconCheck,
} from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/components/cart-provider"

export default function OrderPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart()
  const [orderType, setOrderType] = useState<"pickup" | "delivery">("pickup")
  const [scheduledTime, setScheduledTime] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [notes, setNotes] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 animate-scale-in">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <IconCheck className="size-8" />
        </div>
        <h1 className="mt-6 font-heading text-3xl font-bold text-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Order Confirmed
        </h1>
        <p className="mt-3 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          Thank you, {name || "Guest"}. Your {orderType} order has been placed.
          We will send a confirmation to {phone || "your phone"}.
        </p>
        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <Button asChild className="rounded-full px-8 transition-all duration-300 hover:scale-105 active:scale-95">
            <Link href="/menu">Back to Menu</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="mb-8 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Order
      </h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in-up">
          <IconShoppingBag className="size-16 text-muted-foreground/20 animate-bounce-subtle" />
          <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">
            Your cart is empty
          </h2>
          <p className="mt-2 text-muted-foreground">
            Browse our menu and add some delicious dishes.
          </p>
          <div className="mt-6">
            <Button asChild className="rounded-full px-8 transition-all duration-300 hover:scale-105 active:scale-95">
              <Link href="/menu">Browse Menu</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:shadow-md"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-heading text-base font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      ${item.price} each
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                      <IconClock className="size-3 text-primary" />
                      {item.prepTime} min
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center rounded-full border border-border">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full transition-transform duration-150 active:scale-90"
                        onClick={() => updateQuantity(item.id, quantity - 1)}
                      >
                        <IconMinus className="size-4" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium text-foreground">
                        {quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full transition-transform duration-150 active:scale-90"
                        onClick={() => updateQuantity(item.id, quantity + 1)}
                      >
                        <IconPlus className="size-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground transition-transform duration-150 active:scale-90 hover:text-destructive"
                      onClick={() => removeItem(item.id)}
                    >
                      <IconTrash className="size-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="ghost"
              className="mt-4 text-muted-foreground"
              onClick={clearCart}
            >
              Clear cart
            </Button>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="sticky top-24 space-y-6 rounded-xl border border-border bg-card p-6"
            >
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Checkout
              </h2>

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={orderType === "pickup" ? "default" : "outline"}
                  className={
                    orderType === "pickup"
                      ? "w-full rounded-full"
                      : "w-full rounded-full border-border transition-transform duration-150 active:scale-95"
                  }
                  onClick={() => setOrderType("pickup")}
                >
                  Pickup
                </Button>
                <Button
                  type="button"
                  variant={orderType === "delivery" ? "default" : "outline"}
                  className={
                    orderType === "delivery"
                      ? "w-full rounded-full"
                      : "w-full rounded-full border-border transition-transform duration-150 active:scale-95"
                  }
                  onClick={() => setOrderType("delivery")}
                >
                  Delivery
                </Button>
              </div>

              {[
                { label: `Schedule ${orderType} time`, id: "time", type: "datetime-local", value: scheduledTime, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setScheduledTime(e.target.value) },
                { label: "Full Name", id: "name", type: "text", value: name, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value), placeholder: "John Doe" },
                { label: "Phone", id: "phone", type: "tel", value: phone, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value), placeholder: "(555) 000-0000" },
              ].map((field) => (
                <div key={field.id} className="space-y-2">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    required
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={field.placeholder}
                    className="rounded-lg border-border bg-background"
                  />
                </div>
              ))}

              {orderType === "delivery" && (
                <div className="space-y-2">
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input
                    id="address"
                    placeholder="123 Main St"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="rounded-lg border-border bg-background"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="notes">Notes (optional)</Label>
                <Input
                  id="notes"
                  placeholder="Allergies, special requests..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="rounded-lg border-border bg-background"
                />
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Items</span>
                  <span className="text-foreground">{totalItems}</span>
                </div>
                <div className="mt-2 flex justify-between text-lg font-semibold text-foreground">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Place Order
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
