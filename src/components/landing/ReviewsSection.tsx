import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
    <section className="py-28 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">آراء ضيوفنا</p>
          <h2 className="text-4xl lg:text-5xl font-display text-foreground">ماذا يقولون عنا</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 font-body">{review.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
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
