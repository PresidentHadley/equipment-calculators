import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8"
  }

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-current border-t-transparent",
        sizeClasses[size],
        className
      )}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

interface CalculatorSkeletonProps {
  className?: string
}

export function CalculatorSkeleton({ className }: CalculatorSkeletonProps) {
  return (
    <div className={cn("space-y-4 animate-pulse", className)}>
      <div className="h-8 bg-muted rounded w-3/4"></div>
      <div className="space-y-3">
        <div className="h-12 bg-muted rounded"></div>
        <div className="h-12 bg-muted rounded"></div>
        <div className="h-12 bg-muted rounded"></div>
      </div>
      <div className="h-16 bg-muted rounded"></div>
    </div>
  )
}