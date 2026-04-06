import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Sparkles } from 'lucide-react';
import heroImg from '@/assets/hero-restaurant.jpg';
import { useRef } from 'react';

export default function HeroSection() {
  const navigate = useNavigate();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img src={heroImg} alt="المائدة الذهبية" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-background/15 border border-background/25 rounded-full px-5 py-2 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-champagne" />
          <span className="text-champagne text-sm font-body tracking-wide">تجربة طعام لا تُنسى</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-display text-background leading-tight mb-6"
        >
          المائدة <span className="text-champagne">الذهبية</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-background/75 text-lg sm:text-xl mb-10 font-light leading-relaxed max-w-xl mx-auto"
        >
          حيث تلتقي الفخامة بفن الطهي العالمي. استمتع بتجربة استثنائية في أجواء ساحرة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => navigate('/reserve')}
            size="lg"
            className="gold-gradient text-background font-display text-lg px-10 py-6 hover:opacity-90 transition-opacity"
          >
            احجز طاولتك
            <ChevronLeft className="w-5 h-5 mr-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-background/30 text-background hover:bg-background/10 font-body text-lg px-10 py-6"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            استكشف القائمة
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-background/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-champagne rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
