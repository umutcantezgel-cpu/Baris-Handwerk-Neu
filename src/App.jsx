import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './Layout'
import { PageTransition } from '@/components/motion'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/ServicePage'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Blog = lazy(() => import('./pages/Blog'))
// Use BlogPost (the improved version) instead of BlogDetail
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const Impressum = lazy(() => import('./pages/Impressum'))
const Datenschutz = lazy(() => import('./pages/Datenschutz'))
const AGB = lazy(() => import('./pages/AGB'))
const Login = lazy(() => import('./pages/Login'))

// New standalone pages
const Foerderung = lazy(() => import('./pages/Foerderung'))
const Karriere = lazy(() => import('./pages/Karriere'))
const Energieberatung = lazy(() => import('./pages/Energieberatung'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Widerruf = lazy(() => import('./pages/Widerruf'))
const Beratung = lazy(() => import('./pages/Beratung'))

// Admin Components
import { AuthProvider } from './contexts/AuthContext'
import { ContentProvider } from '@/contexts/ContentContext'
import LoginPage from '@/admin/pages/LoginPage'
import Dashboard from '@/admin/pages/Dashboard'
import BusinessInfoManager from '@/admin/pages/BusinessInfoManager'
import ServiceManager from '@/admin/pages/ServiceManager'
import ContentManager from '@/admin/pages/ContentManager'
import TeamManager from '@/admin/pages/TeamManager'
import SettingsPage from '@/admin/pages/SettingsPage'
import BlogEditor from '@/admin/pages/BlogEditor'
import ProjectManager from '@/admin/pages/ProjectManager'
import Analytics from '@/admin/pages/Analytics'
import AdminLayout from '@/admin/layouts/AdminLayout'
import ProtectedRoute from '@/admin/components/ProtectedRoute'

// Loading spinner component
import Spinner from '@/components/ui/Spinner'

// Integrations
import TrackingScripts from '@/components/common/TrackingScripts';
import SchemaMarkup from '@/components/common/SchemaMarkup';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import { useContent } from '@/contexts/ContentContext';

const InstagramRedirect = () => {
  const { siteConfig } = useContent();
  React.useEffect(() => {
    window.location.href = siteConfig.social.instagram;
  }, [siteConfig]);
  return <div className="min-h-screen flex items-center justify-center bg-white"><Spinner /></div>;
};

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <Layout>
          {/* Integrations */}
          <TrackingScripts />
          <SchemaMarkup />
          <WhatsAppButton />

          <Suspense fallback={<Spinner />}>
            <PageTransition>
              <Routes>
                {/* partially omitted for brevity, existing routes remain unchanged */}
                <Route path="/" element={<Home />} />
                <Route path="/leistungen" element={<Services />} />
                <Route path="/leistungen/:id" element={<ServiceDetail />} />
                <Route path="/ueber-uns" element={<About />} />
                <Route path="/referenzen" element={<Projects />} />
                <Route path="/referenzen/:id" element={<ProjectDetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/agb" element={<AGB />} />
                <Route path="/login" element={<Login />} />

                {/* New standalone pages */}
                <Route path="/foerderung" element={<Foerderung />} />
                <Route path="/karriere" element={<Karriere />} />
                <Route path="/energieberatung" element={<Energieberatung />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/widerruf" element={<Widerruf />} />
                <Route path="/beratung" element={<Beratung />} />
                <Route path="/termin" element={<Beratung />} />

                {/* Redirects */}
                <Route path="/instagram" element={<InstagramRedirect />} />

                {/* Admin Routes */}

                <Route path="/admin/login" element={<LoginPage />} />
                <Route path="/admin/*" element={
                  <ProtectedRoute>
                    <AdminLayout>
                      <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="content" element={<ContentManager />} />
                        <Route path="blog/new" element={<BlogEditor />} />
                        <Route path="blog/:id" element={<BlogEditor />} />
                        <Route path="services" element={<ServiceManager />} />
                        <Route path="projects" element={<ProjectManager />} />
                        <Route path="business" element={<BusinessInfoManager />} />
                        <Route path="team" element={<TeamManager />} />
                        <Route path="analytics" element={<Analytics />} />
                        <Route path="settings" element={<SettingsPage />} />
                      </Routes>
                    </AdminLayout>
                  </ProtectedRoute>
                } />
                <Route path="/support/*" element={<Navigate to="/" replace />} />
              </Routes>
            </PageTransition>
          </Suspense>
        </Layout>
      </ContentProvider>
    </AuthProvider >
  )
}

export default App
