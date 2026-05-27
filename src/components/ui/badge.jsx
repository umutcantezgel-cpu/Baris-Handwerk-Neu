"use client";
import * as React from "react"
import { cn } from "@/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-gray-100 text-gray-900 border-gray-200",
    outline: "border-2 border-gray-200 bg-transparent",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
})

Badge.displayName = "Badge"

export { Badge }
