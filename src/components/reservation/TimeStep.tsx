import { timeSlots } from '@/data/tables';
import { motion } from 'framer-motion';

interface TimeStepProps {
  selectedTime: string;
  onSelect: (time: string) => void;
}

export default function TimeStep({ selectedTime, onSelect }: TimeStepProps) {
  const lunch = timeSlots.filter(t => parseInt(t) < 16);
  const dinner = timeSlots.filter(t => parseInt(t) >= 16);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center max-w-lg mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-display text-foreground mb-2">اختر الوقت</h2>
      <p className="text-muted-foreground font-body mb-6">اختر الوقت المفضل لديك</p>

      <div className="w-full space-y-6">
        <div>
          <h3 className="font-display text-sm text-muted-foreground mb-3">🌞 الغداء</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {lunch.map(time => (
              <button
                key={time}
                onClick={() => onSelect(time)}
                className={`py-3 px-4 rounded-lg border text-sm font-body transition-all duration-200 ${
                  selectedTime === time
                    ? 'gold-gradient text-primary-foreground border-primary shadow-md'
                    : 'bg-card border-border text-foreground hover:border-primary/50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm text-muted-foreground mb-3">🌙 العشاء</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {dinner.map(time => (
              <button
                key={time}
                onClick={() => onSelect(time)}
                className={`py-3 px-4 rounded-lg border text-sm font-body transition-all duration-200 ${
                  selectedTime === time
                    ? 'gold-gradient text-primary-foreground border-primary shadow-md'
                    : 'bg-card border-border text-foreground hover:border-primary/50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
