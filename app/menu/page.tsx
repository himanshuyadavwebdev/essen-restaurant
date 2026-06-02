"use client"

import Image from "next/image"
import { useState } from "react"
import {
  IconStar,
  IconClock,
  IconLeaf,
  IconWheat,
  IconMilk,
  IconFish,
} from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { menuItems, categories } from "@/lib/data"
import { useCart } from "@/components/cart-provider"

const dietaryIcons: Record<string, React.ReactNode> = {
  Vegetarian: <IconLeaf className="size-3.5" />,
  Vegan: <IconLeaf className="size-3.5" />,
  "Gluten-Free": <IconWheat className="size-3.5" />,
  "Dairy-Free": <IconMilk className="size-3.5" />,
  Pescatarian: <IconFish className="size-3.5" />,
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { addItem } = useCart()

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Dining
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Our Menu
        </h1>
        <p className="mt-3 text-muted-foreground">
          Premium cuts and seasonal dishes crafted with care
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(cat)}
            className={
              activeCategory === cat
                ? "rounded-full transition-all duration-300 hover:scale-105"
                : "rounded-full border-border transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:-translate-y-0.5"
            }
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative h-56 overflow-hidden">
              <div className="h-full w-full transition-transform duration-700 hover:scale-110">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.name}
                </h3>
                <span className="shrink-0 font-semibold text-primary transition-transform duration-300 hover:scale-125">
                  ${item.price}
                </span>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
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

              {item.dietary.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.dietary.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-primary/10"
                    >
                      {dietaryIcons[tag] ?? null}
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <Button
                onClick={() => addItem(item)}
                className="mt-5 w-full rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Add to Order
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground">
          No items in this category.
        </p>
      )}
    </div>
  )
}
