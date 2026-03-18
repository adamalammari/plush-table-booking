import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'سارة المحمد',
    rating: 5,
    text: 'تجربة استثنائية! الأطباق كانت فنية بمعنى الكلمة والخدمة راقية جداً. بالتأكيد سأعود مرة أخرى.',
    date: 'قبل أسبوعين',
  },
  {
    name: 'فهد العتيبي',
    rating: 5,
    text: 'أفضل ستيك واغيو تذوقته في الرياض. الأجواء ساحرة والتراس مكان مثالي للعشاء الرومانسي.',
    date: 'قبل شهر',
  },
  {
    name: 'نورة القحطاني',
    rating: 5,
    text: 'حجزت لعيد ميلادي وكان كل شيء مثالياً. الفريق اعتنى بأدق التفاصيل. شكراً المائدة الذهبية!',
    date: 'قبل ٣ أسابيع',
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-28 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">آراء ضيوفنا</p>
          <h2 className="text-4xl lg:text-5xl font-display text-secondary-foreground">ماذا يقولون عنا</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-secondary-foreground/5 rounded-2xl p-8 border border-primary/10 hover:border-primary/25 transition-all duration-500 group"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-secondary-foreground/80 leading-relaxed mb-6 font-body">{review.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-secondary-foreground">{review.name}</p>
                  <p className="text-xs text-secondary-foreground/40 mt-1 font-body">{review.date}</p>
                </div>
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-primary text-sm">{review.name[0]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
