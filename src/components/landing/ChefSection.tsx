import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import chefImg from '@/assets/chef.jpg';

export default function ChefSection() {
  return (
    <section className="py-28 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative order-2 md:order-1"
        >
          <img
            src={chefImg}
            alt="الشيف التنفيذي"
            className="rounded-2xl w-full h-[500px] object-cover shadow-2xl"
          />
          <div className="absolute bottom-6 right-6 left-6 bg-secondary/90 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
            <p className="font-display text-lg text-secondary-foreground">الشيف أحمد الراشد</p>
            <p className="text-champagne/60 text-sm">الشيف التنفيذي — حائز على نجمتي ميشلان</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">الشيف</p>
          <h2 className="text-4xl lg:text-5xl font-display text-secondary-foreground mb-8 leading-tight">
            إبداع في <br />كل طبق
          </h2>
          <div className="relative mb-8">
            <Quote className="w-8 h-8 text-primary/30 absolute -top-2 -right-2" />
            <blockquote className="text-champagne/80 text-lg leading-relaxed pr-8 italic">
              &ldquo;الطبخ ليس مجرد مهنة، بل هو فن وشغف. كل طبق أقدمه هو قصة تروى من خلال النكهات والألوان والقوام. هدفي أن يشعر كل ضيف بأنه في رحلة استثنائية.&rdquo;
            </blockquote>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary-foreground/5 rounded-xl p-4 border border-primary/10">
              <div className="text-2xl font-display text-primary">+٢٥</div>
              <div className="text-xs text-champagne/60 mt-1">عاماً من الخبرة</div>
            </div>
            <div className="bg-secondary-foreground/5 rounded-xl p-4 border border-primary/10">
              <div className="text-2xl font-display text-primary">+١٥</div>
              <div className="text-xs text-champagne/60 mt-1">جائزة دولية</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
