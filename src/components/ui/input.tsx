import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  prefix?: string
  suffix?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, prefix, suffix, ...props }, ref) => {
    const inputId = React.useId()
    const errorId = React.useId()

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {prefix && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {prefix}
            </div>
          )}
          <input
            type={type}
            className={cn(
              "calculator-input flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
              prefix && "pl-8",
              suffix && "pr-12",
              error && "border-destructive focus-visible:ring-destructive",
              className
            )}
            id={inputId}
            ref={ref}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? errorId : undefined}
            {...props}
          />
          {suffix && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {suffix}
            </div>
          )}
        </div>
        {error && (
          <p id={errorId} className="text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }