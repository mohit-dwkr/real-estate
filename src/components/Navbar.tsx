import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Properties', path: '/properties' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Locations', path: '/locations' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isTransparent = isHome && !scrolled;
  const linkClass = isTransparent ? 'nav-link' : 'nav-link-dark';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent ? 'bg-transparent py-6' : 'bg-cream/95 backdrop-blur-md py-4 shadow-sm'
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Building2
              size={28}
              className={`transition-colors duration-500 ${isTransparent ? 'text-white' : 'text-charcoal'}`}
            />
            <span
              className={`font-serif text-2xl tracking-tight transition-colors duration-500 ${
                isTransparent ? 'text-white' : 'text-charcoal'
              }`}
            >
              Meridian
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${linkClass} ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-gold" style={{ padding: '0.75rem 2rem', fontSize: '0.75rem' }}>
              <span>Enquire Now</span>
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden transition-colors ${isTransparent ? 'text-white' : 'text-charcoal'}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal transition-transform duration-500 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-serif text-3xl text-white/80 hover:text-white transition-colors ${
                location.pathname === link.path ? 'text-gold' : ''
              }`}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`,
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-gold mt-4">
            <span>Enquire Now</span>
          </Link>
        </div>
      </div>
    </>
  );
}
