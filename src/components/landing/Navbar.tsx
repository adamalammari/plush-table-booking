import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { href: '#about', label: 'عن المطعم' },
    { href: '#menu', label: 'القائمة' },
    { href: '#gallery', label: 'الأجواء' },
    { href: '#location', label: 'الموقع' },
    { href: '#contact', label: 'تواصل' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-secondary/95 backdrop-blur-xl border-b border-primary/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <h2 className="text-xl font-display text-primary font-bold">المائدة الذهبية</h2>

        <div className="hidden md:flex items-center gap-8 text-sm text-secondary-foreground/60">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden md:block">
            <Button variant="ghost" size="sm" className="text-secondary-foreground/40 text-xs hover:text-primary">
              لوحة التحكم
            </Button>
          </Link>
          <Button
            onClick={() => navigate('/reserve')}
            className="hidden md:flex gold-gradient text-secondary font-semibold text-sm px-6 hover:opacity-90 transition-opacity"
          >
            احجز الآن
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-secondary-foreground/70"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary/95 backdrop-blur-xl border-t border-primary/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-lg"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => { navigate('/reserve'); setMobileOpen(false); }}
                className="gold-gradient text-secondary font-semibold mt-2"
              >
                احجز الآن
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
