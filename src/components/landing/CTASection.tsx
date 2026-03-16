import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import heroImg from '@/assets/hero-restaurant.jpg';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-28 px-6 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-secondary-foreground mb-6">
          احجز تجربتك الآن
        </h2>
        <p className="text-champagne/70 mb-10 text-lg">
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
