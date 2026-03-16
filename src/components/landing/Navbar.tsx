import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-display text-primary font-bold">المائدة الذهبية</h2>
        <div className="hidden md:flex items-center gap-8 text-sm text-champagne/70">
          <a href="#about" className="hover:text-primary transition-colors">عن المطعم</a>
          <a href="#menu" className="hover:text-primary transition-colors">القائمة</a>
          <a href="#gallery" className="hover:text-primary transition-colors">الأجواء</a>
          <a href="#location" className="hover:text-primary transition-colors">الموقع</a>
          <a href="#contact" className="hover:text-primary transition-colors">تواصل</a>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/admin">
            <Button variant="ghost" size="sm" className="text-champagne/50 text-xs hover:text-primary">
              لوحة التحكم
            </Button>
          </Link>
          <Button
            onClick={() => navigate('/reserve')}
            className="gold-gradient text-secondary font-semibold text-sm px-6 hover:opacity-90 transition-opacity"
          >
            احجز الآن
          </Button>
        </div>
      </div>
    </nav>
  );
}
