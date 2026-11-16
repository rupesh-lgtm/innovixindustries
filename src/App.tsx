import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { AboutPage as About } from './pages/About';
import { ProductsPage as Products } from './pages/Products';
import { TeamPage as Team } from './pages/Team';
import { CareersPage as Careers } from './pages/Careers';
import { ContactPage as Contact } from './pages/Contact';
import { TermsPage as Terms } from './pages/Terms';
import { PrivacyPolicyPage as PrivacyPolicy } from './pages/PrivacyPolicy';
import { ProductDetailPage as ProductDetail, productCatalogRecord } from './pages/ProductDetailPage';
import { Footer } from './components/Footer';
import { OfficeDrawer } from './components/OfficeDrawer';
import { QuickContactButtons } from './components/QuickContactButtons';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { updateSEO, pageSEOMap, defaultSEO } from './utils/seo';

// Helper to resolve route slug from pathname
const getInitialPageFromPath = (): { page: string; productSlug: string } => {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (!path || path === 'home') {
    return { page: 'home', productSlug: 'ferrous-scrap' };
  }
  if (path.startsWith('products/')) {
    const slug = path.replace('products/', '');
    if (slug in productCatalogRecord) {
      return { page: 'product-detail', productSlug: slug };
    }
    return { page: 'products', productSlug: 'ferrous-scrap' };
  }
  if (path in productCatalogRecord) {
    return { page: 'product-detail', productSlug: path };
  }
  if (['about', 'products', 'team', 'careers', 'career', 'contact', 'terms', 'privacy'].includes(path)) {
    return { page: path === 'career' ? 'careers' : path, productSlug: 'ferrous-scrap' };
  }
  if (path === 'terms-and-conditions') {
    return { page: 'terms', productSlug: 'ferrous-scrap' };
  }
  if (path === 'privacy-policy') {
    return { page: 'privacy', productSlug: 'ferrous-scrap' };
  }
  return { page: 'home', productSlug: 'ferrous-scrap' };
};

export const App: React.FC = () => {
  const initial = getInitialPageFromPath();
  const [currentPage, setCurrentPage] = useState<string>(initial.page);
  const [selectedProductSlug, setSelectedProductSlug] = useState<string>(initial.productSlug);
  const [officeDrawerOpen, setOfficeDrawerOpen] = useState(false);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const state = getInitialPageFromPath();
      setCurrentPage(state.page);
      setSelectedProductSlug(state.productSlug);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic SEO Title, Description and Canonical URL Sync
  useEffect(() => {
    if (currentPage === 'product-detail' && productCatalogRecord[selectedProductSlug]) {
      const product = productCatalogRecord[selectedProductSlug];
      updateSEO({
        title: `${product.name} (${product.isriCode}) - Specifications & Quote | Innovix Industries`,
        description: `High purity ${product.name} - ${product.headline}. Purity: ${product.purity}. Standard ISRI classification with zero radiation guarantee.`,
        keywords: `${product.name}, ${product.isriCode}, metal scrap, recycled metal, Innovix Industries Noida`,
        canonical: `https://innovixindustries.com/products/${selectedProductSlug}`,
      });
    } else {
      const config = pageSEOMap[currentPage] || defaultSEO;
      updateSEO(config);
    }
  }, [currentPage, selectedProductSlug]);

  const handleNavigate = (section: string) => {
    // Normalize path by stripping leading slash
    let cleanSection = section.startsWith('/') ? section.slice(1) : section;
    if (cleanSection.startsWith('products/')) {
      cleanSection = cleanSection.replace('products/', '');
    }

    if (cleanSection in productCatalogRecord) {
      setSelectedProductSlug(cleanSection);
      setCurrentPage('product-detail');
      window.history.pushState({}, '', `/products/${cleanSection}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanSection === 'about') {
      setCurrentPage('about');
      window.history.pushState({}, '', '/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanSection === 'products') {
      setCurrentPage('products');
      window.history.pushState({}, '', '/products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanSection === 'team') {
      setCurrentPage('team');
      window.history.pushState({}, '', '/team');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanSection === 'careers' || cleanSection === 'career') {
      setCurrentPage('careers');
      window.history.pushState({}, '', '/careers');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanSection === 'contact') {
      setCurrentPage('contact');
      window.history.pushState({}, '', '/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanSection === 'terms' || cleanSection === 'terms-and-conditions') {
      setCurrentPage('terms');
      window.history.pushState({}, '', '/terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanSection === 'privacy' || cleanSection === 'privacy-policy') {
      setCurrentPage('privacy');
      window.history.pushState({}, '', '/privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleanSection === 'home' || cleanSection === '') {
      setCurrentPage('home');
      window.history.pushState({}, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        window.history.pushState({}, '', `/#${cleanSection}`);
        setTimeout(() => {
          const el = document.getElementById(cleanSection);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(cleanSection);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#07131e] text-gray-900 dark:text-gray-100 relative transition-colors duration-300">
        {/* Top Scroll Reading Progress Indicator */}
        <ScrollProgressBar />

        {/* Top Navbar */}
        <Navbar
          onNavigate={handleNavigate}
          onOpenOffice={() => setOfficeDrawerOpen(true)}
          isTransparent={currentPage === 'home'}
        />

        {/* Main Routed Page Content */}
        <main className="flex-1">
          {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
          {currentPage === 'about' && <About />}
          {currentPage === 'products' && <Products />}
          {currentPage === 'product-detail' && (
            <ProductDetail slug={selectedProductSlug} onNavigate={handleNavigate} />
          )}
          {currentPage === 'team' && <Team />}
          {currentPage === 'careers' && <Careers />}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'terms' && <Terms />}
          {currentPage === 'privacy' && <PrivacyPolicy />}
        </main>

        {/* Fixed WhatsApp, Phone, Email & Scroll-to-Top Floating Widget */}
        <QuickContactButtons />

        {/* Right-Side "Our Office" Drawer */}
        <OfficeDrawer
          isOpen={officeDrawerOpen}
          onClose={() => setOfficeDrawerOpen(false)}
        />

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </ThemeProvider>
  );
};

export default App;
