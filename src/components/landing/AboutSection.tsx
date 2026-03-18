import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import terraceImg from '@/assets/terrace.jpg';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section ref={ref} id="about" className="py-28 px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">قصتنا</p>
          <h2 className="text-4xl lg:text-5xl font-display text-foreground mb-6 leading-tight">
            فن الضيافة <br />منذ ١٩٩٨
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            منذ أكثر من ٢٥ عاماً، نقدم في المائدة الذهبية تجربة طعام فريدة تجمع بين أصالة المطبخ العربي وإبداع المطبخ العالمي. يقود مطبخنا فريق من أمهر الطهاة الحائزين على نجمتي ميشلان.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            نختار أجود المكونات الطازجة يومياً من مصادر محلية وعالمية، لنضمن لك تجربة طعام لا مثيل لها في كل زيارة.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span>١٢ ظ - ١١ م</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span>الرياض، حي الملقا</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <motion.img
              style={{ y: imgY }}
              src={terraceImg}
              alt="تراس المطعم"
              className="w-full h-[500px] object-cover scale-110"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-36 h-36 border-2 border-primary/15 rounded-2xl" />
          <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-primary/10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
