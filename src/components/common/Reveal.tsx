import { motion } from "motion/react"
import type { ReactNode, MouseEventHandler } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  onClick?: MouseEventHandler<HTMLDivElement>
}

const directionMap = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  onClick,
}: RevealProps) {
  const initialPosition = directionMap[direction]

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialPosition,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}