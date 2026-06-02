"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import {
  IconMenu2,
  IconX,
  IconShoppingBag,
  IconCalendar,
  IconPhone,
} from "@tabler/icons-react"
import { useCart } from "@/components/cart-provider"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reserve", label: "Reserve" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border backdrop-blur-md transition-all duration-500 animate-fade-in-down",
          scrolled
            ? "bg-background/95 py-2 shadow-lg"
            : "bg-background/80 py-4"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="font-heading text-3xl font-bold tracking-tight text-foreground transition-transform duration-300 hover:scale-105"
          >
            Essen
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative rounded-md px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-[80%]" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/order">
              <button className="relative rounded-full p-2 text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground">
                <IconShoppingBag className="size-5" />
                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 animate-scale-in items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>

            <Link
              href="/reserve"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90 sm:flex"
            >
              <IconCalendar className="size-4" />
              Reserve
            </Link>

            <button
              className="rounded-full p-2 text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <IconX className="size-5" />
              ) : (
                <IconMenu2 className="size-5" />
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden border-t border-border bg-background transition-all duration-300 lg:hidden",
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2.5 text-sm font-medium tracking-wide uppercase transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reserve"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <IconCalendar className="size-4" />
              Reserve a Table
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export function StickyReservationBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-md animate-slide-in-up">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="hidden items-center gap-4 sm:flex">
          <div className="flex items-center gap-2 text-sm text-muted-foreground transition-transform duration-300 hover:translate-x-1">
            <IconPhone className="size-4 text-primary" />
            (555) 123-4567
          </div>
          <span className="text-muted-foreground/30">|</span>
          <span className="text-sm text-muted-foreground">
            42 Gourmet Lane, Culinary City
          </span>
        </div>
        <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
          <span className="text-sm font-medium text-foreground sm:hidden">
            Essen
          </span>
          <Link
            href="/reserve"
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90"
          >
            <IconCalendar className="size-4" />
            Reserve a Table
          </Link>
        </div>
      </div>
    </div>
  )
}
