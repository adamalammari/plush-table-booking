import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
import chefImg from '@/assets/chef.jpg';
import { useRef } from 'react';

export default function ChefSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section ref={ref} className="py-28 px-6 bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 md:order-1"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <motion.img
              style={{ y: imgY }}
              src={chefImg}
              alt="الشيف التنفيذي"
              className="w-full h-[500px] object-cover scale-110"
            />
          </div>
          <div className="absolute bottom-6 right-6 left-6 bg-secondary/90 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
            <p className="font-display text-lg text-secondary-foreground">الشيف أحمد الراشد</p>
            <p className="text-secondary-foreground/50 text-sm font-body">الشيف التنفيذي — حائز على نجمتي ميشلان</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">الشيف</p>
          <h2 className="text-4xl lg:text-5xl font-display text-secondary-foreground mb-8 leading-tight">
            إبداع في <br />كل طبق
          </h2>
          <div className="relative mb-8">
            <Quote className="w-8 h-8 text-primary/30 absolute -top-2 -right-2" />
            <blockquote className="text-secondary-foreground/70 text-lg leading-relaxed pr-8 italic font-body">
              &ldquo;الطبخ ليس مجرد مهنة، بل هو فن وشغف. كل طبق أقدمه هو قصة تروى من خلال النكهات والألوان والقوام. هدفي أن يشعر كل ضيف بأنه في رحلة استثنائية.&rdquo;
            </blockquote>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary-foreground/5 rounded-xl p-5 border border-primary/10">
              <div className="text-3xl font-display text-primary">+٢٥</div>
              <div className="text-xs text-secondary-foreground/50 mt-1 font-body">عاماً من الخبرة</div>
            </div>
            <div className="bg-secondary-foreground/5 rounded-xl p-5 border border-primary/10">
              <div className="text-3xl font-display text-primary">+١٥</div>
              <div className="text-xs text-secondary-foreground/50 mt-1 font-body">جائزة دولية</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
