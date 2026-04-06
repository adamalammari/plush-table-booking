import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MapSection() {
  return (
    <section id="location" className="py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">موقعنا</p>
          <h2 className="text-4xl lg:text-5xl font-display text-foreground">كيف تصل إلينا</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3 rounded-2xl overflow-hidden border border-border elegant-shadow h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.174!2d46.6528!3d24.7636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sAl%20Malqa%2C%20Riyadh!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع المائدة الذهبية"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 flex flex-col justify-center gap-6"
          >
            <div className="bg-card rounded-2xl p-6 border border-border">
              {[
                { icon: MapPin, title: 'العنوان', content: <><span>الرياض، حي الملقا</span><br /><span>شارع التخصصي، بجوار برج المملكة</span></> },
                { icon: Phone, title: 'الهاتف', content: <span dir="ltr">+966 11 234 5678</span> },
                { icon: Clock, title: 'ساعات العمل', content: <><span>الأحد - الخميس: ١٢ ظ - ١١ م</span><br /><span>الجمعة - السبت: ١ م - ١٢ ص</span></> },
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-4 ${i < 2 ? 'mb-6' : ''}`}>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://maps.google.com/?q=24.7636,46.6528" target="_blank" rel="noopener noreferrer">
              <Button className="w-full gold-gradient text-background font-display hover:opacity-90 py-6 text-base gap-2">
                <Navigation className="w-4 h-4" />
                افتح في خرائط قوقل
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
