import { Step } from '@/types/reservation';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, LayoutGrid, User, CheckCircle } from 'lucide-react';

const steps: { key: Step; label: string; icon: React.ElementType }[] = [
  { key: 'date', label: 'التاريخ', icon: CalendarDays },
  { key: 'time', label: 'الوقت', icon: Clock },
  { key: 'table', label: 'الطاولة', icon: LayoutGrid },
  { key: 'details', label: 'البيانات', icon: User },
  { key: 'confirmation', label: 'التأكيد', icon: CheckCircle },
];

const stepOrder: Step[] = ['date', 'time', 'table', 'details', 'confirmation'];

interface StepIndicatorProps {
  currentStep: Step;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const currentIndex = stepOrder.indexOf(currentStep);

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10">
      {steps.map((step, i) => {
        const Icon = step.icon;
        const isActive = i === currentIndex;
        const isDone = i < currentIndex;

        return (
          <div key={step.key} className="flex items-center gap-1 sm:gap-2">
            <div className="flex flex-col items-center gap-1">
              <motion.div
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-colors ${
                  isActive
                    ? 'gold-gradient border-primary text-primary-foreground'
                    : isDone
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'bg-muted border-border text-muted-foreground'
                }`}
                animate={isActive ? { scale: [1, 1.08, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              <span className={`text-[10px] sm:text-xs font-body ${isActive ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-6 sm:w-10 h-px mb-5 ${i < currentIndex ? 'bg-primary' : 'bg-border'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
