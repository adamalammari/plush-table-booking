import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, ChevronLeft, Utensils, Wine, Award } from 'lucide-react';
import heroImg from '@/assets/hero-restaurant.jpg';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';
import terraceImg from '@/assets/terrace.jpg';

const menuItems = [
  { name: 'سلمون مشوي بالزبدة', desc: 'مع صلصة البيستو وأوراق الميكروغرين', price: '١٨٥ ر.س', img: dish1 },
  { name: 'فوندان الشوكولاتة', desc: 'مع كولي التوت ورقائق الذهب', price: '٩٥ ر.س', img: dish2 },
  { name: 'ستيك واغيو', desc: 'مع زبدة الكمأة والخضار المشوية', price: '٣٢٠ ر.س', img: dish3 },
];

const stats = [
  { icon: Award, label: 'نجمة ميشلان', value: '٢' },
  { icon: Utensils, label: 'طبق مميز', value: '+٨٠' },
  { icon: Wine, label: 'نوع نبيذ', value: '+٢٠٠' },
  { icon: Star, label: 'تقييم الضيوف', value: '٤.٩' },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-display text-primary font-bold">المائدة الذهبية</h2>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">عن المطعم</a>
            <a href="#menu" className="hover:text-primary transition-colors">القائمة</a>
            <a href="#gallery" className="hover:text-primary transition-colors">الأجواء</a>
            <a href="#contact" className="hover:text-primary transition-colors">تواصل</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/admin">
              <Button variant="ghost" size="sm" className="text-muted-foreground text-xs">
                لوحة التحكم
              </Button>
            </Link>
            <Button
              onClick={() => navigate('/reserve')}
              className="gold-gradient text-primary-foreground font-semibold text-sm px-6 hover:opacity-90 transition-opacity"
            >
              احجز الآن
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="المائدة الذهبية" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-secondary/20" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-4 font-body">تجربة طعام لا تُنسى</p>
          <h1 className="text-5xl sm:text-7xl font-display text-primary-foreground leading-tight mb-6">
            المائدة <span className="text-primary">الذهبية</span>
          </h1>
          <p className="text-champagne/80 text-lg mb-8 font-light leading-relaxed">
            حيث تلتقي الفخامة بفن الطهي العالمي. استمتع بتجربة استثنائية في أجواء ساحرة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/reserve')}
              size="lg"
              className="gold-gradient text-primary-foreground font-display text-lg px-10 py-6 hover:opacity-90 transition-opacity"
            >
              احجز طاولتك
              <ChevronLeft className="w-5 h-5 mr-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-champagne/40 text-primary-foreground hover:bg-champagne/10 font-body text-lg px-10 py-6"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              استكشف القائمة
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-3xl font-display text-primary-foreground">{stat.value}</div>
              <div className="text-xs text-champagne/60 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">قصتنا</p>
            <h2 className="text-4xl font-display text-foreground mb-6">فن الضيافة <br />منذ ١٩٩٨</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              منذ أكثر من ٢٥ عاماً، نقدم في المائدة الذهبية تجربة طعام فريدة تجمع بين أصالة المطبخ العربي وإبداع المطبخ العالمي. يقود مطبخنا فريق من أمهر الطهاة الحائزين على نجمتي ميشلان.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              نختار أجود المكونات الطازجة يومياً من مصادر محلية وعالمية، لنضمن لك تجربة طعام لا مثيل لها في كل زيارة.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> ١٢ ظ - ١١ م</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> الرياض، حي الملقا</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src={terraceImg} alt="تراس المطعم" className="rounded-xl w-full h-[400px] object-cover" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-xl" />
          </motion.div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">أطباقنا المميزة</p>
            <h2 className="text-4xl font-display text-foreground">من إبداعات المطبخ</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <span className="font-display text-primary text-lg">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-display text-primary-foreground mb-4">احجز تجربتك الآن</h2>
          <p className="text-champagne/70 mb-8 text-lg">طاولتك في انتظارك. احجز الآن واستمتع بأمسية لا تُنسى.</p>
          <Button
            onClick={() => navigate('/reserve')}
            size="lg"
            className="gold-gradient text-primary-foreground font-display text-lg px-12 py-6 hover:opacity-90 transition-opacity"
          >
            احجز طاولتك
            <ChevronLeft className="w-5 h-5 mr-2" />
          </Button>
        </motion.div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="py-16 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-xl text-primary mb-4">المائدة الذهبية</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              تجربة طعام فاخرة تجمع بين التراث والحداثة في قلب الرياض.
            </p>
          </div>
          <div>
            <h4 className="font-display text-foreground mb-4">ساعات العمل</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>الأحد - الخميس: ١٢:٠٠ ظ - ١١:٠٠ م</p>
              <p>الجمعة - السبت: ١:٠٠ م - ١٢:٠٠ ص</p>
            </div>
          </div>
          <div>
            <h4 className="font-display text-foreground mb-4">تواصل معنا</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +966 11 234 5678</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> الرياض، حي الملقا، شارع التخصصي</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          © ٢٠٢٦ المائدة الذهبية. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}
