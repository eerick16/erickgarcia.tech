import { motion } from "motion/react"
import type { ReactNode } from "react"

type RevealCardProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function RevealCard({
  children,
  className = "",
  delay = 0,
}: RevealCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}