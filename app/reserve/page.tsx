"use client"

import { useState } from "react"
import Link from "next/link"
import {
  IconCalendar,
  IconUsers,
  IconClock,
  IconCheck,
  IconChefHat,
} from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

export default function ReservePage() {
  const [submitted, setSubmitted] = useState(false)
  const [guests, setGuests] = useState("2")

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
          Reservation Confirmed
        </h1>
        <p className="mt-3 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          We have received your booking request. A confirmation will be sent to
          your email shortly.
        </p>
        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <Button asChild className="rounded-full px-8 transition-all duration-300 hover:scale-105 active:scale-95">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Dining
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Reserve a Table
        </h1>
        <p className="mt-3 text-muted-foreground">
          Book your dining experience at Essen
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-xl border border-border bg-card p-6 sm:p-10"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="date">
              <IconCalendar className="mr-1 inline size-4 text-primary" />
              Date
            </Label>
            <Input
              id="date"
              type="date"
              required
              className="rounded-lg border-border bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">
              <IconClock className="mr-1 inline size-4 text-primary" />
              Time
            </Label>
            <Select defaultValue="19:00">
              <SelectTrigger className="rounded-lg border-border bg-background">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {["17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"].map((t) => (
                  <SelectItem key={t} value={t}>
                    {t === "17:00" ? "5:00 PM" : t === "17:30" ? "5:30 PM" : t === "18:00" ? "6:00 PM" : t === "18:30" ? "6:30 PM" : t === "19:00" ? "7:00 PM" : t === "19:30" ? "7:30 PM" : t === "20:00" ? "8:00 PM" : t === "20:30" ? "8:30 PM" : "9:00 PM"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">
            <IconUsers className="mr-1 inline size-4 text-primary" />
            Number of Guests
          </Label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="rounded-lg border-border bg-background">
              <SelectValue placeholder="Select guests" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {["firstName","lastName"].map((field) => (
            <div key={field} className="space-y-2">
              <Label htmlFor={field}>{field === "firstName" ? "First Name" : "Last Name"}</Label>
              <Input
                id={field}
                placeholder={field === "firstName" ? "Jane" : "Doe"}
                required
                className="rounded-lg border-border bg-background"
              />
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { id: "email", type: "email", placeholder: "jane@example.com" },
            { id: "phone", type: "tel", placeholder: "(555) 000-0000" },
          ].map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id}>{field.id === "email" ? "Email" : "Phone"}</Label>
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                required
                className="rounded-lg border-border bg-background"
              />
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Label htmlFor="occasion">Occasion (optional)</Label>
          <Select>
            <SelectTrigger className="rounded-lg border-border bg-background">
              <SelectValue placeholder="Select occasion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="anniversary">Anniversary</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="date">Date Night</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="requests">Special Requests (optional)</Label>
          <Textarea
            id="requests"
            placeholder="Dietary restrictions, seating preferences, etc."
            className="rounded-lg border-border bg-background"
          />
        </div>

        <Button
          type="submit"
          className="w-full rounded-full transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
        >
          Confirm Reservation
        </Button>
      </form>

      <div className="mt-10 rounded-xl border border-border bg-muted/30 p-6 text-center">
        <IconChefHat className="mx-auto size-8 text-muted-foreground/40 animate-bounce-subtle" />
        <p className="mt-3 text-sm text-muted-foreground">
          For parties larger than 8, please{" "}
          <Link href="/contact" className="underline hover:text-foreground">
            contact us directly
          </Link>{" "}
          so we can accommodate your group.
        </p>
      </div>
    </div>
  )
}
