import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import terraceImg from '@/assets/terrace.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              ١٢ ظ - ١١ م
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              الرياض، حي الملقا
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img src={terraceImg} alt="تراس المطعم" className="rounded-2xl w-full h-[450px] object-cover shadow-2xl" />
          <div className="absolute -bottom-6 -right-6 w-36 h-36 border-2 border-primary/20 rounded-2xl" />
          <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-primary/10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
