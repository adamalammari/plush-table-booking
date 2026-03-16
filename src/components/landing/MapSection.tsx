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
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 rounded-2xl overflow-hidden border border-border shadow-lg h-[400px]"
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

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col justify-center gap-6"
          >
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-foreground mb-1">العنوان</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    الرياض، حي الملقا<br />
                    شارع التخصصي، بجوار برج المملكة
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-foreground mb-1">الهاتف</h4>
                  <p className="text-sm text-muted-foreground" dir="ltr">+966 11 234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-foreground mb-1">ساعات العمل</h4>
                  <p className="text-sm text-muted-foreground">الأحد - الخميس: ١٢ ظ - ١١ م</p>
                  <p className="text-sm text-muted-foreground">الجمعة - السبت: ١ م - ١٢ ص</p>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=24.7636,46.6528"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full gold-gradient text-secondary font-display hover:opacity-90 py-6 text-base gap-2">
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
