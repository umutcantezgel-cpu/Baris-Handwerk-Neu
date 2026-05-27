"use client";
import * as React from "react"
import { cn } from "@/utils"

const Select = React.forwardRef(({ className, children, value, onValueChange, ...props }, ref) => {
  return (
    <select
      className={cn(
        "flex h-10 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c69c6d] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      value={value}
      onChange={(e) => onValueChange?.(e.target.value)}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  )
})

Select.displayName = "Select"

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className={cn("relative", className)} ref={ref} {...props}>
      {children}
    </div>
  )
})

SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ placeholder, ...props }) => {
  return <option value="" disabled>{placeholder}</option>
}

SelectValue.displayName = "SelectValue"

const SelectContent = ({ children, ...props }) => {
  return <>{children}</>
}

SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef(({ className, children, value, ...props }, ref) => {
  return (
    <option
      className={cn("py-1.5 px-2", className)}
      value={value}
      ref={ref}
      {...props}
    >
      {children}
    </option>
  )
})

SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
