import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  useScrollToTop()

  return (
    <div className="min-h-screen bg-slateDeep text-slate-200">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}