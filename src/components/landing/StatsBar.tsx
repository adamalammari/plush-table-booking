import { motion, useInView } from 'framer-motion';
import { Award, Utensils, Users, Star } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { icon: Award, label: 'نجمة ميشلان', value: 2, suffix: '', prefix: '' },
  { icon: Utensils, label: 'طبق مميز', value: 80, suffix: '', prefix: '+' },
  { icon: Users, label: 'ضيف سعيد', value: 50, suffix: 'K', prefix: '+' },
  { icon: Star, label: 'تقييم الضيوف', value: 4.9, suffix: '', prefix: '' },
];

function AnimatedCounter({ value, prefix, suffix, inView }: { value: number; prefix: string; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Number(current.toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const display = value === 4.9 ? count.toFixed(1) : Math.floor(count);
  return <span>{prefix}{display}{suffix}</span>;
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-secondary py-12 border-y border-primary/10">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-4xl font-display text-secondary-foreground">
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={inView} />
            </div>
            <div className="text-xs text-secondary-foreground/50 mt-2 tracking-wide font-body">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
