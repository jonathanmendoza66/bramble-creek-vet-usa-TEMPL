import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { FacilityPage } from './pages/FacilityPage';
import { NewClientsPage } from './pages/NewClientsPage';
import { ContactPage } from './pages/ContactPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <ScrollToTop />
      <Header />
      <main className="pt-14 lg:pt-18 pb-16 lg:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/facility" element={<FacilityPage />} />
          <Route path="/new-clients" element={<NewClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
