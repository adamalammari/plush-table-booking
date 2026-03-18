import { motion } from 'framer-motion';
import { ArrowUpLeft } from 'lucide-react';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';

const menuItems = [
  { name: 'سلمون مشوي بالزبدة', desc: 'مع صلصة البيستو وأوراق الميكروغرين', price: '١٨٥ ر.س', img: dish1, tag: 'الأكثر طلباً' },
  { name: 'فوندان الشوكولاتة', desc: 'مع كولي التوت ورقائق الذهب', price: '٩٥ ر.س', img: dish2, tag: 'حلويات' },
  { name: 'ستيك واغيو', desc: 'مع زبدة الكمأة والخضار المشوية', price: '٣٢٠ ر.س', img: dish3, tag: 'اختيار الشيف' },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-28 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">أطباقنا المميزة</p>
          <h2 className="text-4xl lg:text-5xl font-display text-foreground">من إبداعات المطبخ</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-body">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-primary text-xl">{item.price}</span>
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ArrowUpLeft className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
