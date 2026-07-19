import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  className?: string
  id?: string
}>

export function Section({ id, className, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={cn('py-16 sm:py-20', className)}
    >
      {children}
    </motion.section>
  )
}