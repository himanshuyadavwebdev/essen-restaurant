import Image from "next/image"
import {
  IconAward,
  IconLeaf,
  IconUsers,
} from "@tabler/icons-react"
import { chefImage } from "@/lib/data"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Heritage
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Our Story
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Essen was born from a simple belief: that a great steakhouse is more
          than a menu — it is a tradition. Founded in 2018 by a team of chefs
          with roots in the finest chophouses of New York and Chicago, we set out
          to create a space where dry-aged beef meets European refinement.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Every cut on our menu is hand-selected, dry-aged in-house, and broiled
          at 1500 degrees to lock in flavor. We work closely with ranchers and
          purveyors to source the finest prime beef, sustainable seafood, and
          seasonal produce. Our kitchen operates with minimal waste, and our
          menu evolves with the rhythms of nature.
        </p>
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-3">
        {[
          { icon: IconLeaf, title: "Ranch to Table", desc: "All beef is USDA Prime, dry-aged in-house for a minimum of 28 days." },
          { icon: IconAward, title: "Award-Winning Team", desc: "Our chefs bring decades of experience from legendary steakhouse kitchens across America." },
          { icon: IconUsers, title: "Community First", desc: "We host monthly chef's table events and support local food banks." },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-500 hover:rotate-180 hover:scale-110">
              <item.icon className="size-6" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="text-center font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Meet the Chef
        </h2>
        <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
          <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full transition-transform duration-500 hover:scale-105 hover:rotate-3">
            <Image
              src={chefImage}
              alt="Chef Marcus Voss"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              Chef Marcus Voss
            </h3>
            <p className="mt-1 text-sm font-medium text-primary">
              Executive Chef & Co-Founder
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Marcus trained under the masters of New York&apos;s storied
              steakhouses before opening Essen. His philosophy is rooted in
              fire: let the beef speak, season it simply, and cook it with
              respect. Every cut that leaves his kitchen is a tribute to the
              craft.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Under his leadership, Essen has earned critical acclaim for its
              dry-aging program and commitment to sourcing. When not at the
              broiler, Marcus teaches young butchers and tends to our
              house-made charcuterie program.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
