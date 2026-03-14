import { ReservationData } from '@/types/reservation';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { CalendarDays, Clock, Users, MapPin, CheckCircle2 } from 'lucide-react';

interface ConfirmationStepProps {
  data: ReservationData;
  confirmed: boolean;
  reservationId?: string;
}

export default function ConfirmationStep({ data, confirmed, reservationId }: ConfirmationStepProps) {
  if (confirmed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center text-center py-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
        </motion.div>
        <h2 className="text-3xl font-display text-foreground mb-2">تم الحجز بنجاح!</h2>
        <p className="text-muted-foreground font-body mb-6">سنرسل لك تأكيداً على رقم هاتفك</p>
        <div className="text-4xl font-display text-primary">{reservationId}</div>
        <p className="text-xs text-muted-foreground mt-2 font-body">رقم الحجز الخاص بك</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center max-w-md mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-display text-foreground mb-2">تأكيد الحجز</h2>
      <p className="text-muted-foreground font-body mb-6">راجع تفاصيل حجزك</p>

      <div className="w-full border border-border rounded-xl bg-card p-6 space-y-4" dir="rtl">
        <div className="flex items-center gap-3">
          <CalendarDays className="w-5 h-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground font-body">التاريخ</p>
            <p className="font-body font-medium text-foreground">
              {data.date ? format(data.date, 'EEEE، d MMMM yyyy', { locale: ar }) : '—'}
            </p>
          </div>
        </div>
        <div className="h-px bg-border" />
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground font-body">الوقت</p>
            <p className="font-body font-medium text-foreground">{data.time || '—'}</p>
          </div>
        </div>
        <div className="h-px bg-border" />
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground font-body">عدد الضيوف</p>
            <p className="font-body font-medium text-foreground">{data.guests} أشخاص</p>
          </div>
        </div>
        <div className="h-px bg-border" />
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground font-body">الطاولة</p>
            <p className="font-body font-medium text-foreground">
              {data.table ? `${data.table.name} — ${data.table.zone}` : '—'}
            </p>
          </div>
        </div>
        <div className="h-px bg-border" />
        <div>
          <p className="text-xs text-muted-foreground font-body mb-1">الاسم</p>
          <p className="font-body font-medium text-foreground">{data.name}</p>
        </div>
        {data.notes && (
          <>
            <div className="h-px bg-border" />
            <div>
              <p className="text-xs text-muted-foreground font-body mb-1">ملاحظات</p>
              <p className="font-body text-sm text-foreground">{data.notes}</p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
