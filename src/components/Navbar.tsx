import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Properties', path: '/properties' },
  // { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  // { name: 'Locations', path: '/locations' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          isTransparent
            ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-7'
            : 'bg-[#121212]/90 backdrop-blur-xl py-4 border-b border-white/10 shadow-2xl'
        }`}
      >
        <div className="container-luxury max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3.5 group cursor-pointer">
            <div className="p-2 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 transition-all duration-500 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Building2
                size={24}
                className="text-[#D4AF37] transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span
              className={`font-serif text-2xl lg:text-3xl tracking-wider font-light transition-colors duration-500 ${
                isTransparent ? 'text-white' : 'text-white'
              }`}
            >
              MERIDIAN<span className="text-[#D4AF37] font-semibold">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-1 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 group ${
                    isActive
                      ? 'text-[#D4AF37]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-amber-200 transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Enquire CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-7 py-3 text-xs uppercase tracking-[0.25em] font-medium text-black bg-gradient-to-r from-[#D4AF37] via-[#f3e5ab] to-[#B38F29] rounded-none shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.45)] transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Enquire Now</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:text-[#D4AF37] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0d0d0d]/98 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-center items-center ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-7 text-center">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-serif text-3xl tracking-wider transition-all duration-300 ${
                location.pathname === link.path ? 'text-[#D4AF37]' : 'text-white/70 hover:text-white'
              }`}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(25px)',
                transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`,
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-black bg-[#D4AF37] hover:bg-white transition-all duration-300"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(25px)',
              transition: `opacity 0.5s ease ${navLinks.length * 0.06}s, transform 0.5s ease ${navLinks.length * 0.06}s`,
            }}
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </>
  );
}