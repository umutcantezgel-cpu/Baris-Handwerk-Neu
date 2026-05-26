import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const Impressum = lazy(() => import('./pages/Impressum'))
const Datenschutz = lazy(() => import('./pages/Datenschutz'))

// Admin Components
import { AuthProvider } from '@/contexts/AuthContext'
import { ContentProvider } from '@/contexts/ContentContext'
import LoginPage from '@/admin/pages/LoginPage'
import Dashboard from '@/admin/pages/Dashboard'
import BusinessInfoManager from '@/admin/pages/BusinessInfoManager'
import ServiceManager from '@/admin/pages/ServiceManager'
import AdminLayout from '@/admin/layouts/AdminLayout'
import ProtectedRoute from '@/admin/components/ProtectedRoute'

// Loading spinner component
import LoadingSpinner from '@/components/ui/LoadingSpinner'

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/post" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<LoginPage />} />
              <Route path="/admin/*" element={
                <ProtectedRoute>
                  <AdminLayout>
                    <Routes>
                      <Route index element={<Dashboard />} />
                      <Route path="business" element={<BusinessInfoManager />} />
                      <Route path="services" element={<ServiceManager />} />
                      {/* Future admin routes will go here */}
                    </Routes>
                  </AdminLayout>
                </ProtectedRoute>
              } />
            </Routes>
          </Suspense>
        </Layout>
      </ContentProvider>
    </AuthProvider >
  )
}

export default App
