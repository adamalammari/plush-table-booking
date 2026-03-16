import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import heroImg from '@/assets/hero-restaurant.jpg';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="المائدة الذهبية" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-secondary/30" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-champagne text-sm tracking-[0.4em] uppercase mb-6 font-body"
        >
          تجربة طعام لا تُنسى
        </motion.p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display text-secondary-foreground leading-tight mb-6">
          المائدة <span className="text-primary">الذهبية</span>
        </h1>
        <p className="text-champagne/80 text-lg sm:text-xl mb-10 font-light leading-relaxed max-w-xl mx-auto">
          حيث تلتقي الفخامة بفن الطهي العالمي. استمتع بتجربة استثنائية في أجواء ساحرة.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate('/reserve')}
            size="lg"
            className="gold-gradient text-secondary font-display text-lg px-10 py-6 hover:opacity-90 transition-opacity"
          >
            احجز طاولتك
            <ChevronLeft className="w-5 h-5 mr-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-champagne/40 text-secondary-foreground hover:bg-champagne/10 font-body text-lg px-10 py-6"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            استكشف القائمة
          </Button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-champagne/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
