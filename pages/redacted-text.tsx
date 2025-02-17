import type React from "react"

interface RedactedTextProps {
  children: React.ReactNode
}

export function RedactedText({ children }: RedactedTextProps) {
  return (
    <span className="inline-block bg-neutral-900 text-transparent select-none hover:bg-neutral-800 transition-colors duration-300 px-1 mx-0.5">
      {children}
    </span>
  )
}

export default RedactedText

