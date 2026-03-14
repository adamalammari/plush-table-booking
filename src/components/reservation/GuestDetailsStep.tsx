import { ReservationData } from '@/types/reservation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

interface GuestDetailsStepProps {
  data: ReservationData;
  onChange: (field: keyof ReservationData, value: string | number) => void;
}

export default function GuestDetailsStep({ data, onChange }: GuestDetailsStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center max-w-md mx-auto w-full"
    >
      <h2 className="text-2xl sm:text-3xl font-display text-foreground mb-2">بيانات الضيف</h2>
      <p className="text-muted-foreground font-body mb-6">أدخل بياناتك لإتمام الحجز</p>

      <div className="w-full space-y-4" dir="rtl">
        <div>
          <label className="text-sm font-body text-muted-foreground mb-1 block">الاسم الكامل *</label>
          <Input
            value={data.name}
            onChange={e => onChange('name', e.target.value)}
            placeholder="أحمد محمد"
            className="bg-card border-border font-body"
          />
        </div>
        <div>
          <label className="text-sm font-body text-muted-foreground mb-1 block">رقم الهاتف *</label>
          <Input
            value={data.phone}
            onChange={e => onChange('phone', e.target.value)}
            placeholder="+966 5XX XXX XXXX"
            className="bg-card border-border font-body"
            dir="ltr"
          />
        </div>
        <div>
          <label className="text-sm font-body text-muted-foreground mb-1 block">البريد الإلكتروني</label>
          <Input
            value={data.email}
            onChange={e => onChange('email', e.target.value)}
            placeholder="email@example.com"
            className="bg-card border-border font-body"
            dir="ltr"
          />
        </div>
        <div>
          <label className="text-sm font-body text-muted-foreground mb-1 block">عدد الضيوف *</label>
          <Input
            type="number"
            min={1}
            max={10}
            value={data.guests}
            onChange={e => onChange('guests', parseInt(e.target.value) || 1)}
            className="bg-card border-border font-body"
          />
        </div>
        <div>
          <label className="text-sm font-body text-muted-foreground mb-1 block">ملاحظات خاصة</label>
          <Textarea
            value={data.notes}
            onChange={e => onChange('notes', e.target.value)}
            placeholder="حساسية طعام، مناسبة خاصة..."
            className="bg-card border-border font-body resize-none"
            rows={3}
          />
        </div>
      </div>
    </motion.div>
  );
}
