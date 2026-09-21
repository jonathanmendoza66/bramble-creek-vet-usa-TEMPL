import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { practiceInfo } from '../data/constants';
import { Logo } from './Logo';
import { useIsOpen } from '../hooks/useInView';

export function Footer() {
  const isOpen = useIsOpen();

  return (
    <footer className="bg-primary-900 text-white pb-24 lg:pb-0">
      <div className="container-app section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10" />
              <div>
                <span className="text-lg font-semibold font-display text-white">Bramble Creek</span>
                <span className="block text-xs text-primary-200 -mt-0.5">Veterinary Hospital</span>
              </div>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed mb-4">
              Independent, relationship-centered veterinary care for dogs and cats in Granville, Ohio and surrounding communities.
            </p>
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                isOpen ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
                {isOpen ? 'Open Now' : 'Closed'}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display text-lg">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/team', label: 'Our Team' },
                { to: '/facility', label: 'Facility Tour' },
                { to: '/new-clients', label: 'New Client Info' },
                { to: '/resources', label: 'Pet Health Resources' },
                { to: '/testimonials', label: 'Testimonials' },
              ].map(link => (
                <Link key={link.to} to={link.to} className="block text-primary-200 hover:text-white text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display text-lg">Contact</h4>
            <div className="space-y-3">
              <a href={`tel:${practiceInfo.phone}`} className="flex items-start gap-2.5 text-primary-200 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                {practiceInfo.phone}
              </a>
              <a href={`mailto:${practiceInfo.email}`} className="flex items-start gap-2.5 text-primary-200 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                {practiceInfo.email}
              </a>
              <div className="flex items-start gap-2.5 text-primary-200 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{practiceInfo.address.full}</span>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <a href={practiceInfo.social.facebook} className="p-2 rounded-lg bg-primary-800 hover:bg-primary-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={practiceInfo.social.instagram} className="p-2 rounded-lg bg-primary-800 hover:bg-primary-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display text-lg">Hours</h4>
            <div className="space-y-1.5">
              {practiceInfo.hours.map(h => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-primary-200">{h.day}</span>
                  <span className="text-white font-medium">
                    {h.close ? `${h.open} - ${h.close}` : h.open}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-2 text-xs text-primary-300">
              <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <span>After-hours emergencies: Contact OSU Veterinary Medical Center at (614) 292-3551</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-300">
            &copy; {new Date().getFullYear()} Bramble Creek Veterinary Hospital. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-primary-300">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
