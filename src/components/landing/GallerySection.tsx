import { motion } from 'framer-motion';
import interiorImg from '@/assets/interior.jpg';
import terraceImg from '@/assets/terrace.jpg';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';

const images = [
  { src: interiorImg, alt: 'القاعة الرئيسية', span: 'md:col-span-2 md:row-span-2' },
  { src: terraceImg, alt: 'التراس', span: '' },
  { src: dish1, alt: 'طبق مميز', span: '' },
  { src: dish2, alt: 'حلويات فاخرة', span: '' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">أجواء المطعم</p>
          <h2 className="text-4xl lg:text-5xl font-display text-foreground">لحظات لا تُنسى</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`overflow-hidden rounded-2xl ${img.span} ${i === 0 ? 'h-[300px] md:h-full' : 'h-[200px] md:h-[250px]'}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
