import { Phone, MapPin, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 bg-secondary border-t border-primary/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl text-primary mb-4">المائدة الذهبية</h3>
          <p className="text-sm text-secondary-foreground/50 leading-relaxed font-body">
            تجربة طعام فاخرة تجمع بين التراث والحداثة في قلب الرياض.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Twitter, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-secondary-foreground mb-4">ساعات العمل</h4>
          <div className="space-y-2 text-sm text-secondary-foreground/50 font-body">
            <p>الأحد - الخميس: ١٢:٠٠ ظ - ١١:٠٠ م</p>
            <p>الجمعة - السبت: ١:٠٠ م - ١٢:٠٠ ص</p>
          </div>
        </div>
        <div>
          <h4 className="font-display text-secondary-foreground mb-4">تواصل معنا</h4>
          <div className="space-y-3 text-sm text-secondary-foreground/50 font-body">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +966 11 234 5678</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> الرياض، حي الملقا، شارع التخصصي</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-primary/10 text-center text-xs text-secondary-foreground/30 font-body">
        © ٢٠٢٦ المائدة الذهبية. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
