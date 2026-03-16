import { motion } from 'framer-motion';
import { Award, Utensils, Wine, Star } from 'lucide-react';

const stats = [
  { icon: Award, label: 'نجمة ميشلان', value: '٢' },
  { icon: Utensils, label: 'طبق مميز', value: '+٨٠' },
  { icon: Wine, label: 'نوع نبيذ', value: '+٢٠٠' },
  { icon: Star, label: 'تقييم الضيوف', value: '٤.٩' },
];

export default function StatsBar() {
  return (
    <section className="bg-secondary py-10 border-y border-primary/10">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <stat.icon className="w-7 h-7 text-primary mx-auto mb-3" />
            <div className="text-4xl font-display text-secondary-foreground">{stat.value}</div>
            <div className="text-xs text-champagne/60 mt-1 tracking-wide">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
