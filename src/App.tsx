import { MainLayout } from '@/layouts/MainLayout'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { HireLatamDevelopersPage } from '@/pages/HireLatamDevelopersPage'
import { HomePage } from '@/pages/HomePage'
import { HowItWorksPage } from '@/pages/HowItWorksPage'
import { IndustriesPage } from '@/pages/IndustriesPage'
import { LatamVsApacPage } from '@/pages/LatamVsApacPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ResourcePostPage } from '@/pages/ResourcePostPage'
import { ResourcesPage } from '@/pages/ResourcesPage'
import { StaffAugmentationPage } from '@/pages/StaffAugmentationPage'
import { TalentPage } from '@/pages/TalentPage'
import { WhyLatamPage } from '@/pages/WhyLatamPage'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />} path="/">
        <Route element={<HomePage />} index />
        <Route element={<StaffAugmentationPage />} path="staff-augmentation" />
        <Route element={<HireLatamDevelopersPage />} path="hire-latam-developers" />
        <Route element={<LatamVsApacPage />} path="latam-vs-apac" />
        <Route element={<TalentPage />} path="talent" />
        <Route element={<IndustriesPage />} path="industries" />
        <Route element={<HowItWorksPage />} path="how-it-works" />
        <Route element={<WhyLatamPage />} path="why-latam" />
        <Route element={<AboutPage />} path="about" />
        <Route element={<ResourcesPage />} path="resources" />
        <Route element={<ResourcePostPage />} path="resources/:slug" />
        <Route element={<ContactPage />} path="contact" />
        <Route element={<NotFoundPage />} path="*" />
      </Route>
    </Routes>
  )
}