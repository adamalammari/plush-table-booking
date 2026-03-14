import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface DateStepProps {
  date: Date | null;
  onSelect: (date: Date | undefined) => void;
}

export default function DateStep({ date, onSelect }: DateStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center"
    >
      <h2 className="text-2xl sm:text-3xl font-display text-foreground mb-2">اختر التاريخ</h2>
      <p className="text-muted-foreground font-body mb-6">حدد اليوم المناسب لحجزك</p>
      <div className="border border-border rounded-lg p-2 bg-card">
        <Calendar
          mode="single"
          selected={date ?? undefined}
          onSelect={onSelect}
          disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
          className={cn("p-3 pointer-events-auto")}
        />
      </div>
    </motion.div>
  );
}
