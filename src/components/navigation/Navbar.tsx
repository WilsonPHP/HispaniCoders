import { navigationItems } from '@/data/navigation'
import { cn } from '@/utils/cn'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slateDeep/75 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="inline-flex items-center gap-3 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-slate-950">
            HC
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">HispaniCoders</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2 text-sm transition-colors',
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Schedule a Call
          </Link>
        </div>

        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-100 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div className="mx-auto w-full max-w-7xl px-5 pb-4 sm:px-8 lg:hidden lg:px-12">
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  )
}