"use client"

import { useState } from "react"
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconCheck,
} from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactInfo = [
    { icon: IconMapPin, label: "Address", lines: ["42 Gourmet Lane", "Food District, Culinary City, CA 90210"] },
    { icon: IconPhone, label: "Phone", lines: ["(555) 123-4567"] },
    { icon: IconMail, label: "Email", lines: ["hello@essen.restaurant"] },
    { icon: IconClock, label: "Hours", lines: ["Mon – Thu: 5pm – 10pm", "Fri – Sat: 5pm – 11pm", "Sunday: 4pm – 9pm"] },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Reach Out
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-3 text-muted-foreground">
          We would love to hear from you. Reach out for reservations, events,
          or feedback.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Restaurant Info
            </h2>
            <ul className="mt-6 space-y-5">
              {contactInfo.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
                >
                  <item.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-sm leading-relaxed text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex h-64 items-center justify-center rounded-xl border border-border bg-muted transition-transform duration-500 hover:scale-[1.02]">
            <div className="text-center">
              <IconMapPin className="mx-auto size-10 text-muted-foreground/20 animate-bounce-subtle" />
              <p className="mt-2 text-sm text-muted-foreground/60">Map integration placeholder</p>
            </div>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-10 text-center animate-scale-in">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <IconCheck className="size-8" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-bold text-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                Message Sent
              </h2>
              <p className="mt-3 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                Thank you for reaching out. We will get back to you as soon as
                possible.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-xl border border-border bg-card p-6 sm:p-10"
            >
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Send a Message
              </h2>

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

              {[
                { id: "email", type: "email", placeholder: "jane@example.com", label: "Email" },
                { id: "subject", type: "text", placeholder: "General Inquiry", label: "Subject" },
              ].map((field) => (
                <div key={field.id} className="space-y-2">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="rounded-lg border-border bg-background"
                  />
                </div>
              ))}

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  required
                  rows={5}
                  className="rounded-lg border-border bg-background"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
