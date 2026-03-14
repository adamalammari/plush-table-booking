import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ReservationData, Step } from '@/types/reservation';
import StepIndicator from './StepIndicator';
import DateStep from './DateStep';
import TimeStep from './TimeStep';
import FloorPlan from './FloorPlan';
import GuestDetailsStep from './GuestDetailsStep';
import ConfirmationStep from './ConfirmationStep';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const stepOrder: Step[] = ['date', 'time', 'table', 'details', 'confirmation'];

export default function ReservationWizard() {
  const [step, setStep] = useState<Step>('date');
  const [confirmed, setConfirmed] = useState(false);
  const [data, setData] = useState<ReservationData>({
    date: null,
    time: '',
    guests: 2,
    table: null,
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const currentIndex = stepOrder.indexOf(step);

  const canProceed = () => {
    switch (step) {
      case 'date': return !!data.date;
      case 'time': return !!data.time;
      case 'table': return !!data.table;
      case 'details': return data.name.trim() !== '' && data.phone.trim() !== '';
      default: return true;
    }
  };

  const next = () => {
    if (!canProceed()) {
      toast.error('يرجى إكمال جميع الحقول المطلوبة');
      return;
    }
    if (currentIndex < stepOrder.length - 1) {
      setStep(stepOrder[currentIndex + 1]);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setStep(stepOrder[currentIndex - 1]);
    }
  };

  const handleConfirm = () => {
    setConfirmed(true);
    toast.success('تم تأكيد حجزك بنجاح!');
  };

  const handleChange = (field: keyof ReservationData, value: string | number) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="py-6 text-center border-b border-border">
        <h1 className="text-3xl sm:text-4xl font-display text-foreground tracking-tight">المائدة الذهبية</h1>
        <p className="text-sm text-muted-foreground font-body mt-1">تجربة طعام استثنائية</p>
      </header>

      <div className="flex-1 flex flex-col items-center px-4 py-8 max-w-2xl mx-auto w-full">
        <StepIndicator currentStep={step} />

        <div className="w-full flex-1">
          <AnimatePresence mode="wait">
            {step === 'date' && (
              <DateStep
                key="date"
                date={data.date}
                onSelect={(d) => setData(prev => ({ ...prev, date: d ?? null }))}
              />
            )}
            {step === 'time' && (
              <TimeStep
                key="time"
                selectedTime={data.time}
                onSelect={(t) => setData(prev => ({ ...prev, time: t }))}
              />
            )}
            {step === 'table' && (
              <FloorPlan
                key="table"
                selectedTable={data.table}
                guests={data.guests}
                onSelect={(t) => setData(prev => ({ ...prev, table: t }))}
              />
            )}
            {step === 'details' && (
              <GuestDetailsStep
                key="details"
                data={data}
                onChange={handleChange}
              />
            )}
            {step === 'confirmation' && (
              <ConfirmationStep
                key="confirmation"
                data={data}
                confirmed={confirmed}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {!confirmed && (
          <div className="flex gap-4 mt-8 w-full max-w-md">
            {currentIndex > 0 && (
              <Button
                variant="outline"
                onClick={prev}
                className="flex-1 gap-2 border-border text-foreground font-body"
              >
                <ArrowRight className="w-4 h-4" />
                السابق
              </Button>
            )}
            {step === 'confirmation' ? (
              <Button
                onClick={handleConfirm}
                className="flex-1 gold-gradient text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity"
              >
                تأكيد الحجز
              </Button>
            ) : (
              <Button
                onClick={next}
                disabled={!canProceed()}
                className="flex-1 gold-gradient text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity disabled:opacity-40 gap-2"
              >
                التالي
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}
          </div>
        )}

        {confirmed && (
          <Button
            onClick={() => {
              setStep('date');
              setConfirmed(false);
              setData({ date: null, time: '', guests: 2, table: null, name: '', phone: '', email: '', notes: '' });
            }}
            variant="outline"
            className="mt-6 border-border font-body"
          >
            حجز جديد
          </Button>
        )}
      </div>
    </div>
  );
}
