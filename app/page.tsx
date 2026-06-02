import Image from "next/image"
import Link from "next/link"
import {
  IconStar,
  IconClock,
  IconMapPin,
  IconPhone,
  IconCalendar,
  IconArrowRight,
  IconUsers,
  IconQuote,
} from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { menuItems, reviews, averageRating, features, heroImage, diningRoomImage } from "@/lib/data"

export default function HomePage() {
  const featured = menuItems.filter((item) => item.featured)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="animate-ken-burns absolute inset-0">
            <Image
              src={heroImage}
              alt="Essen restaurant dining room"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-background/85" />
        </div>

        {/* Decorative orbs — kept minimal for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-float absolute -right-40 -top-40 size-[500px] rounded-full bg-primary/10 blur-[24px]" />
          <div className="animate-float absolute -bottom-40 -left-40 size-[500px] rounded-full bg-accent/10 blur-[24px]" style={{ animationDelay: "3s" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="animate-fade-in-up text-xs font-bold uppercase tracking-[0.3em] text-primary" style={{ animationDelay: "0.1s" }}>
            Est. 2018 — Culinary City
          </p>

          <h1 className="animate-scale-in mt-6 font-heading text-6xl font-bold tracking-tight text-foreground sm:text-8xl lg:text-9xl" style={{ animationDelay: "0.2s" }}>
            Essen
          </h1>

          <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl" style={{ animationDelay: "0.3s" }}>
            A modern steakhouse where dry-aged beef meets European refinement.
            Every cut is broiled to perfection. Every moment is worth
            remembering.
          </p>

          <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="rounded-full px-10 py-6 text-base transition-all duration-300 hover:scale-105 active:scale-95">
              <Link href="/reserve">
                <IconCalendar className="mr-2 size-4" />
                Reserve a Table
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#FFC72C] px-10 py-6 text-base font-bold text-[#292929] hover:bg-[#F5B800] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Link href="/menu">
                View Menu
                <IconArrowRight className="ml-2 size-4 animate-bounce-subtle" />
              </Link>
            </Button>
          </div>

          <div className="animate-fade-in-up mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground" style={{ animationDelay: "0.5s" }}>
            <span className="flex items-center gap-1.5 transition-transform duration-300 hover:scale-110">
              <IconStar className="size-4 fill-amber-400 text-amber-400" />
              {averageRating.toFixed(1)} from {reviews.length} reviews
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="flex items-center gap-1.5 transition-transform duration-300 hover:scale-110">
              <IconMapPin className="size-4 text-primary" />
              42 Gourmet Lane
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="flex items-center gap-1.5 transition-transform duration-300 hover:scale-110">
              <IconPhone className="size-4 text-primary" />
              (555) 123-4567
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="h-10 w-6 rounded-full border-2 border-primary/30 p-1">
            <div className="h-2 w-full rounded-full bg-primary animate-bounce-subtle" />
          </div>
        </div>
      </section>

      {/* Features / Promotions */}
      <section className="border-t border-border bg-muted/30 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Happening Now
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Features & Events
              </h2>
            </div>
            <Link
              href="/menu"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 sm:flex"
            >
              View All
              <IconArrowRight className="size-4 animate-bounce-subtle" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.id}
                href={feature.href}
                className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="absolute inset-0 overflow-hidden transition-transform duration-700 group-hover:scale-110">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <div className="relative z-10 p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary transition-transform duration-300 group-hover:translate-x-1">
                    {feature.subtitle}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative overflow-hidden border-t border-border px-4 py-24 sm:px-6">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <IconQuote className="mx-auto size-10 text-accent" />
          <blockquote className="mt-6 font-heading text-2xl font-medium leading-relaxed italic text-foreground sm:text-3xl lg:text-4xl">
            &ldquo;Nobody matches Essen for memorable dining — business or
            pleasure. It is like the family you want to visit again and again.
            Authentic. Intimate. A little quirky. Always amazing food.&rdquo;
          </blockquote>
          <p className="mt-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            — Culinary Weekly
          </p>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="border-t border-border px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              The Menu
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Signature Selections
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <span className="shrink-0 font-semibold text-primary transition-transform duration-300 hover:scale-125">
                      ${item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1 transition-transform duration-300 hover:scale-110">
                      <IconStar className="size-4 fill-amber-400 text-amber-400" />
                      {item.rating}
                    </span>
                    <span className="flex items-center gap-1 transition-transform duration-300 hover:scale-110">
                      <IconClock className="size-4 text-primary" />
                      {item.prepTime} min
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-full border-border px-8 transition-all duration-300 hover:scale-105 active:scale-95">
              <Link href="/menu">
                View Full Menu
                <IconArrowRight className="ml-2 size-4 animate-bounce-subtle" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Find Us / Location */}
      <section className="border-t border-border bg-muted/30 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Visit Us
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Find a Table
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-xl border border-border transition-transform duration-500 hover:scale-[1.02] lg:h-auto">
              <div className="h-full w-full transition-transform duration-700 hover:scale-105">
                <Image
                  src={diningRoomImage}
                  alt="Essen dining room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Essen — Culinary City
                </h3>
                <p className="mt-2 text-muted-foreground">
                  42 Gourmet Lane, Food District
                  <br />
                  Culinary City, CA 90210
                </p>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                {[
                  { icon: IconClock, text: "Mon – Thu: 5pm – 10pm" },
                  { icon: IconClock, text: "Fri – Sat: 5pm – 11pm" },
                  { icon: IconClock, text: "Sunday: 4pm – 9pm" },
                  { icon: IconPhone, text: "(555) 123-4567" },
                  { icon: IconUsers, text: "Private events available" },
                ].map((item, i) => (
                  <p key={i} className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                    <item.icon className="size-4 text-primary" />
                    {item.text}
                  </p>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <Button asChild className="rounded-full px-6 transition-all duration-300 hover:scale-105 active:scale-95">
                  <Link href="/reserve">
                    <IconCalendar className="mr-2 size-4" />
                    Reserve
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-border px-6 transition-all duration-300 hover:scale-105 active:scale-95">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
