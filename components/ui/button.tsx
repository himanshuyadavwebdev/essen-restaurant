import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"

    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline:
        "border-border bg-background hover:bg-muted hover:text-foreground",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-muted hover:text-foreground",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      link: "text-primary underline-offset-4 hover:underline",
    }

    const sizeClasses = {
      default: "h-9 gap-1.5 px-4",
      sm: "h-8 gap-1 rounded-md px-3 text-xs",
      lg: "h-10 gap-1.5 px-6 text-base",
      icon: "size-9",
    }

    const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{
        className?: string
        [key: string]: unknown
      }>
      return React.cloneElement(child, {
        className: cn(classes, child.props.className),
        ...props,
      })
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
export type { ButtonProps }
