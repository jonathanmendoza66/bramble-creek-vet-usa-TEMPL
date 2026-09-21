import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Home, Stethoscope, Users, Building2, MessageCircle } from 'lucide-react';
import { practiceInfo } from '../data/constants';
import { Logo } from './Logo';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/team', label: 'Our Team' },
  { path: '/facility', label: 'Facility' },
  { path: '/new-clients', label: 'New Clients' },
  { path: '/resources', label: 'Resources' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/contact', label: 'Contact' },
];

const mobileTabLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/services', label: 'Services', icon: Stethoscope },
  { path: '/team', label: 'Team', icon: Users },
  { path: '/facility', label: 'Facility', icon: Building2 },
  { path: '/contact', label: 'Contact', icon: MessageCircle },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/50">
        <div className="container-app px-6">
          <div className="flex items-center justify-between h-18">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <div>
                <span className="text-lg font-semibold text-primary-800 font-display">Bramble Creek</span>
                <span className="block text-xs text-gray-500 -mt-0.5">Veterinary Hospital</span>
              </div>
            </Link>
            <nav className="flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href={`tel:${practiceInfo.phone}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-700">
                <Phone className="w-4 h-4" />
                {practiceInfo.phone}
              </a>
              <Link to="/contact" className="btn-primary text-sm px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                Book Visit
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/50">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="w-8 h-8" />
            <span className="text-base font-semibold text-primary-800 font-display">Bramble Creek</span>
          </Link>
          <div className="flex items-center gap-2">
            <a href={`tel:${practiceInfo.phone}`} className="p-2 rounded-lg text-primary-600 hover:bg-primary-50">
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="absolute top-14 left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-slide-up">
            <nav className="px-4 py-3 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block btn-primary text-center mt-3"
              >
                Book an Appointment
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Bottom Tab Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-gray-200/50 safe-bottom">
        <div className="flex items-center justify-around h-16 px-2">
          {mobileTabLinks.map(link => {
            const Icon = link.icon;
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors min-w-[56px] ${
                  active ? 'text-primary-600' : 'text-gray-500'
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? 'stroke-[2.5]' : ''}`} />
                <span className="text-[10px] font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
