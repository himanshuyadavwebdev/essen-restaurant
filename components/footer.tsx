import Link from "next/link"
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconMapPin,
  IconPhone,
  IconClock,
  IconMail,
} from "@tabler/icons-react"
import { NewsletterSignup } from "@/components/newsletter"

export function Footer() {
  const quickLinks = [
    { href: "/menu", label: "Menu" },
    { href: "/reserve", label: "Reserve a Table" },
    { href: "/order", label: "Cart" },
    { href: "/about", label: "About Us" },
  ]

  const hours = [
    "Mon – Thu: 5pm – 10pm",
    "Fri – Sat: 5pm – 11pm",
    "Sunday: 4pm – 9pm",
  ]

  const contact = [
    { icon: IconMapPin, text: "42 Gourmet Lane, Food District" },
    { icon: IconPhone, text: "(555) 123-4567" },
    { icon: IconMail, text: "hello@essen.restaurant" },
  ]

  return (
    <footer className="w-full border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <NewsletterSignup />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground transition-transform duration-300 hover:scale-[1.02]">
              Essen
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Modern European dining crafted with passion. An unforgettable
              culinary experience in the heart of the city.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: "https://instagram.com", icon: IconBrandInstagram },
                { href: "https://facebook.com", icon: IconBrandFacebook },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border p-2.5 text-muted-foreground transition-all duration-300 hover:scale-110 hover:rotate-3 hover:text-foreground"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Quick Links
            </h4>
            <div className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Hours
            </h4>
            <div className="mt-6 space-y-3">
              {hours.map((h, i) => (
                <p
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 hover:translate-x-1"
                >
                  <IconClock className="size-4 shrink-0 text-primary" />
                  {h}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Contact
            </h4>
            <div className="mt-6 space-y-3">
              {contact.map((c, i) => (
                <p
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 hover:translate-x-1"
                >
                  <c.icon className="size-4 shrink-0 text-primary" />
                  {c.text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Essen Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
