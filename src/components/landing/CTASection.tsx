import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import heroImg from '@/assets/hero-restaurant.jpg';
import { useRef } from 'react';

export default function CTASection() {
  const navigate = useNavigate();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="py-32 px-6 bg-secondary relative overflow-hidden">
      <motion.div className="absolute inset-0 opacity-15" style={{ y: bgY }}>
        <img src={heroImg} alt="" className="w-full h-full object-cover scale-110" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-transparent to-secondary/50" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-secondary-foreground mb-6">
          احجز تجربتك الآن
        </h2>
        <p className="text-secondary-foreground/60 mb-10 text-lg font-body">
          طاولتك في انتظارك. احجز الآن واستمتع بأمسية لا تُنسى.
        </p>
        <Button
          onClick={() => navigate('/reserve')}
          size="lg"
          className="gold-gradient text-secondary font-display text-lg px-14 py-7 hover:opacity-90 transition-opacity"
        >
          احجز طاولتك
          <ChevronLeft className="w-5 h-5 mr-2" />
        </Button>
      </motion.div>
    </section>
  );
}
