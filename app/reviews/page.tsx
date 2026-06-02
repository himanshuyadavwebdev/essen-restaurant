import {
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react"
import { reviews, averageRating } from "@/lib/data"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= rating ? (
            <IconStarFilled className="size-4 text-amber-400" />
          ) : (
            <IconStar className="size-4 text-muted-foreground/30" />
          )}
        </span>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-12 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Testimonials
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Guest Reviews
        </h1>
        <p className="mt-3 text-muted-foreground">
          Hear what our guests have to say about their experience at Essen
        </p>
      </div>

      <div className="mx-auto mb-16 max-w-md rounded-xl border border-border bg-card p-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Overall Rating
        </p>
        <p className="mt-2 font-heading text-6xl font-bold text-foreground">
          {averageRating.toFixed(1)}
        </p>
        <div className="mt-3 flex justify-center">
          <StarRating rating={Math.round(averageRating)} />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Based on {reviews.length} reviews
        </p>
        <div className="mt-6 space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = reviews.filter((r) => r.rating === stars).length
            const pct = (count / reviews.length) * 100
            return (
              <div
                key={stars}
                className="flex items-center gap-3 text-sm"
              >
                <span className="w-8 text-right text-muted-foreground">
                  {stars}
                </span>
                <IconStarFilled className="size-3.5 text-amber-400" />
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-amber-400"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-8 text-muted-foreground">{count}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-medium text-primary transition-transform duration-300 hover:scale-110 hover:rotate-6">
                {review.avatar}
              </div>
              <div>
                <p className="font-medium text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <StarRating rating={review.rating} />
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              &ldquo;{review.comment}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
