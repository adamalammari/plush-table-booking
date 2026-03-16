import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error('يرجى إدخال البريد الإلكتروني وكلمة المرور');
      return;
    }

    setIsLoading(true);
    const { error } = await signIn(email.trim(), password);
    setIsLoading(false);

    if (error) {
      toast.error('بيانات الدخول غير صحيحة');
    } else {
      toast.success('تم تسجيل الدخول بنجاح');
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-6" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display text-primary mb-2">المائدة الذهبية</h1>
          <p className="text-champagne/60 text-sm font-body">تسجيل دخول لوحة الإدارة</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-xl space-y-6">
          <div>
            <label className="text-sm text-muted-foreground block mb-2 font-body">البريد الإلكتروني</label>
            <div className="relative">
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="pr-10 bg-background border-border"
                dir="ltr"
                maxLength={255}
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground block mb-2 font-body">كلمة المرور</label>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="pr-10 bg-background border-border"
                dir="ltr"
                maxLength={128}
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full gold-gradient text-secondary font-display text-base py-6 hover:opacity-90 transition-opacity"
          >
            {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
          </Button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full text-center text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
          >
            <ArrowRight className="w-4 h-4" />
            العودة للموقع
          </button>
        </form>
      </motion.div>
    </div>
  );
}
