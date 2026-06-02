"use client"

import { useState } from "react"
import { IconMail, IconCheck } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lg sm:p-10">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary animate-bounce-subtle">
          <IconMail className="size-6" />
        </div>
        <h3 className="mt-4 font-heading text-2xl font-bold">
          Join the Essen E-Club
        </h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Be the first to know about exclusive events, seasonal menus, and
          special offers.
        </p>

        <div className="mt-6 w-full max-w-md">
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-primary animate-fade-in-up">
              <span className="flex h-5 w-5 items-center justify-center animate-scale-in">
                <IconCheck className="size-5" />
              </span>
              <span className="text-sm font-medium">
                Thank you for signing up!
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-3 animate-fade-in-up sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border-border bg-background px-5 transition-transform duration-300 focus:scale-[1.02]"
              />
              <Button
                type="submit"
                className="rounded-full px-8 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
