import { UserRoundSearch  } from "lucide-react"

import { cn } from "@/lib/utils"

export function InteractiveHoverButton2({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group bg-fuchsia-100 relative w-auto cursor-pointer overflow-hidden rounded-full border-8 border-x-red-500 hover:border-red-500 p-2 px-6 text-center font-semibold  transition-all duration-1000",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <UserRoundSearch className="h-5 w-5"/>
      </div>
    </button>
  )
}
