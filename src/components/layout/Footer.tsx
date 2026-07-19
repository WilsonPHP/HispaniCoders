import { Link } from 'react-router-dom'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60 py-10">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="font-display text-xl font-semibold text-white">HispaniCoders</p>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            Helping US companies build world-class engineering teams with top LATAM talent.
          </p>
        </div>
        <div className="flex items-end justify-between lg:justify-end">
          <div className="flex gap-5 text-sm text-slate-400">
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link to="/resources" className="hover:text-white">
              Resources
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 w-full max-w-7xl px-5 text-xs text-slate-500 sm:px-8 lg:px-12">
        © {year} HispaniCoders. All rights reserved.
      </p>
    </footer>
  )
}