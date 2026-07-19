import { navigationItems } from '@/data/navigation'
import { cn } from '@/utils/cn'
import { Link, NavLink } from 'react-router-dom'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="mt-4 rounded-2xl border border-white/12 bg-slate-950/95 p-4 lg:hidden">
      <ul className="flex flex-col gap-1">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'block rounded-lg px-3 py-2 text-sm transition-colors',
                  isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white',
                )
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        onClick={onClose}
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-2 font-semibold text-slate-900"
      >
        Schedule a Call
      </Link>
    </div>
  )
}