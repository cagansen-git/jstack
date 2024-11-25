import { cn } from "@/utils"

interface MaxWidthProps {
  className?: string
  children: React.ReactNode
}
export const MaxWidthWrapper = ({ className, children }: MaxWidthProps) => {
  return <div className={cn("h-full mx-auto max-wscreen-xl px-2.5 md:px-20", className)}>{children}</div>
}
