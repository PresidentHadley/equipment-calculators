import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    label?: string
    formatValue?: (value: number) => string
  }
>(({ className, label, formatValue, ...props }, ref) => {
  const value = props.value || props.defaultValue || [0]
  
  return (
    <div className="space-y-3">
      {label && (
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium leading-none">
            {label}
          </label>
          <span className="text-sm text-muted-foreground">
            {formatValue ? formatValue(value[0]) : value[0]}
          </span>
        </div>
      )}
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center h-6",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation" />
      </SliderPrimitive.Root>
    </div>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }