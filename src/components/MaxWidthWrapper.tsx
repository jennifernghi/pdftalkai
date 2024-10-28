import { cn } from "@/lib/utils"
import {ReactNode } from "react"
// Fills the available width (w-full) but doesn’t exceed 1280px (max-w-screen-xl).
// Centers itself (mx-auto).
// Has horizontal padding of 2.5 units by default, switching to 20 units on medium screens and up.

const MaxWidthWrapper = ({
    className,
    children
} : {
    className?: string
    children: ReactNode
}) => {
    return (<div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
        {children}
    </div>
    )
}

export default MaxWidthWrapper