import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 pt-20 pb-8">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Building2 size={28} className="text-gold" />
              <span className="font-serif text-2xl text-white">Meridian</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50 mb-6 max-w-xs">
              Representing the world's most extraordinary properties with discretion, intelligence, and an unwavering commitment to excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300"
                  aria-label="Social media"
                >
                  <Icon size={16} className="text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Properties', path: '/properties' },
                { name: 'Projects', path: '/projects' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Locations', path: '/locations' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Properties</h4>
            <ul className="space-y-3 text-sm">
              {['Villas', 'Penthouses', 'Estates', 'Modern Houses', 'Apartments', 'Townhouses'].map((item) => (
                <li key={item}>
                  <Link to="/properties" className="hover:text-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <span>150 Madison Avenue, New York, NY 10016</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+12125550100" className="hover:text-gold transition-colors">+1 (212) 555-0100</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:info@meridian.com" className="hover:text-gold transition-colors">info@meridian.com</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40">Mon – Fri: 9:00 AM – 7:00 PM</p>
              <p className="text-xs text-white/40">Sat – Sun: 10:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Code By Mohit. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
