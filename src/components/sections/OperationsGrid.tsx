import { Card } from '@/components/ui/Card'
import {
  CreditCard,
  FileText,
  Laptop,
  LifeBuoy,
  Receipt,
  Search,
  ShieldCheck,
  UserPlus,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'

type OperationItem = {
  title: string
  description: string
  icon: LucideIcon
}

const operationItems: OperationItem[] = [
  {
    title: 'Talent Sourcing',
    description: 'Finding experienced LATAM technology professionals.',
    icon: Search,
  },
  {
    title: 'Technical Vetting',
    description: 'Technical screening and candidate evaluation.',
    icon: ShieldCheck,
  },
  {
    title: 'Contracts',
    description: 'Documentation and agreements handled for you.',
    icon: FileText,
  },
  {
    title: 'International Payments',
    description: 'Reliable monthly payments for your contractors.',
    icon: CreditCard,
  },
  {
    title: 'Tax Administration',
    description: 'Administrative tax management for international contractors.',
    icon: Receipt,
  },
  {
    title: 'Hardware Provisioning',
    description: 'Equipment provided when required.',
    icon: Laptop,
  },
  {
    title: 'Onboarding',
    description: 'Helping new professionals integrate quickly.',
    icon: UserPlus,
  },
  {
    title: 'Ongoing Support',
    description: 'Continuous operational assistance throughout the engagement.',
    icon: LifeBuoy,
  },
  {
    title: 'Team Scaling',
    description: 'Quickly add or replace professionals as your business grows.',
    icon: Users,
  },
]

export function OperationsGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="Operational services">
      {operationItems.map((item, index) => {
        const Icon = item.icon

        return (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
          >
            <Card className="h-full transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/25">
              <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.description}</p>
            </Card>
          </motion.li>
        )
      })}
    </ul>
  )
}