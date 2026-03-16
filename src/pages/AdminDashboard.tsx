import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import {
  getReservations,
  updateReservation,
  deleteReservation,
  StoredReservation,
} from '@/lib/reservationStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  ArrowRight,
  Search,
  Trash2,
  Pencil,
  X,
  CalendarDays,
  Users,
  Clock,
  LayoutGrid,
  CheckCircle,
  XCircle,
  Filter,
  LogOut,
} from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

type FilterStatus = 'all' | 'confirmed' | 'cancelled' | 'completed';

export default function AdminDashboard() {
  const { signOut, user } = useAuth();
  const [reservations, setReservations] = useState<StoredReservation[]>([]);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [editingRes, setEditingRes] = useState<StoredReservation | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const reload = () => setReservations(getReservations());
  useEffect(() => { reload(); }, []);

  const filtered = reservations
    .filter(r => filterStatus === 'all' || r.status === filterStatus)
    .filter(r =>
      r.name.includes(search) ||
      r.phone.includes(search) ||
      r.id.includes(search) ||
      r.tableName.includes(search)
    )
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const handleStatusChange = (id: string, status: StoredReservation['status']) => {
    updateReservation(id, { status });
    reload();
    toast.success(status === 'cancelled' ? 'تم إلغاء الحجز' : 'تم تحديث الحالة');
  };

  const handleDelete = () => {
    if (deleteId) {
      deleteReservation(deleteId);
      reload();
      setDeleteId(null);
      toast.success('تم حذف الحجز نهائياً');
    }
  };

  const handleEditSave = () => {
    if (editingRes) {
      updateReservation(editingRes.id, editingRes);
      reload();
      setEditingRes(null);
      toast.success('تم تحديث الحجز');
    }
  };

  const statusBadge = (status: StoredReservation['status']) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="gold-gradient text-primary-foreground border-0 gap-1 font-body"><CheckCircle className="w-3 h-3" /> مؤكد</Badge>;
      case 'cancelled':
        return <Badge variant="destructive" className="gap-1 font-body"><XCircle className="w-3 h-3" /> ملغي</Badge>;
      case 'completed':
        return <Badge className="bg-secondary text-secondary-foreground border-0 gap-1 font-body"><CheckCircle className="w-3 h-3" /> مكتمل</Badge>;
    }
  };

  const totalConfirmed = reservations.filter(r => r.status === 'confirmed').length;
  const totalToday = reservations.filter(r => {
    try { return format(new Date(r.date), 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd'); } catch { return false; }
  }).length;

  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                <ArrowRight className="w-4 h-4" />
                الموقع
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-display text-foreground">لوحة إدارة الحجوزات</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground hidden sm:inline">{user?.email}</span>
            <Link to="/reserve">
              <Button size="sm" className="gold-gradient text-primary-foreground font-semibold hover:opacity-90">
                حجز جديد
              </Button>
            </Link>
            <Button
              size="sm"
              variant="ghost"
              className="text-muted-foreground hover:text-destructive gap-1"
              onClick={() => { signOut(); toast.success('تم تسجيل الخروج'); }}
            >
              <LogOut className="w-4 h-4" />
              خروج
            </Button>
          </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: LayoutGrid, label: 'إجمالي الحجوزات', value: reservations.length, color: 'text-primary' },
            { icon: CheckCircle, label: 'حجوزات مؤكدة', value: totalConfirmed, color: 'text-primary' },
            { icon: CalendarDays, label: 'حجوزات اليوم', value: totalToday, color: 'text-primary' },
            { icon: Users, label: 'إجمالي الضيوف', value: reservations.reduce((s, r) => s + r.guests, 0), color: 'text-primary' },
          ].map((stat, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5">
              <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
              <div className="text-2xl font-display text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="ابحث بالاسم، الهاتف، رقم الحجز..."
              className="pr-10 bg-card border-border"
            />
          </div>
          <div className="flex gap-2">
            {(['all', 'confirmed', 'cancelled', 'completed'] as FilterStatus[]).map(s => (
              <Button
                key={s}
                variant={filterStatus === s ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus(s)}
                className={filterStatus === s ? 'gold-gradient text-primary-foreground border-0' : 'border-border'}
              >
                <Filter className="w-3 h-3 ml-1" />
                {s === 'all' ? 'الكل' : s === 'confirmed' ? 'مؤكد' : s === 'cancelled' ? 'ملغي' : 'مكتمل'}
              </Button>
            ))}
          </div>
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <CalendarDays className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-display">لا توجد حجوزات</p>
            <p className="text-sm mt-2">ابدأ بإضافة حجز جديد أو قم بتعديل البحث</p>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-right px-4 py-3 font-medium text-muted-foreground">رقم الحجز</th>
                    <th className="text-right px-4 py-3 font-medium text-muted-foreground">الضيف</th>
                    <th className="text-right px-4 py-3 font-medium text-muted-foreground">التاريخ</th>
                    <th className="text-right px-4 py-3 font-medium text-muted-foreground">الوقت</th>
                    <th className="text-right px-4 py-3 font-medium text-muted-foreground">الطاولة</th>
                    <th className="text-right px-4 py-3 font-medium text-muted-foreground">الضيوف</th>
                    <th className="text-right px-4 py-3 font-medium text-muted-foreground">الحالة</th>
                    <th className="text-right px-4 py-3 font-medium text-muted-foreground">إجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {filtered.map(r => (
                      <motion.tr
                        key={r.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors"
                      >
                        <td className="px-4 py-3 font-mono text-xs text-primary">{r.id}</td>
                        <td className="px-4 py-3">
                          <div className="font-medium text-foreground">{r.name}</div>
                          <div className="text-xs text-muted-foreground" dir="ltr">{r.phone}</div>
                        </td>
                        <td className="px-4 py-3 text-foreground">
                          {(() => { try { return format(new Date(r.date), 'd MMM yyyy', { locale: ar }); } catch { return r.date; } })()}
                        </td>
                        <td className="px-4 py-3 text-foreground">{r.time}</td>
                        <td className="px-4 py-3">
                          <span className="text-foreground">{r.tableName}</span>
                          <span className="text-xs text-muted-foreground mr-1">({r.tableZone})</span>
                        </td>
                        <td className="px-4 py-3 text-foreground">{r.guests}</td>
                        <td className="px-4 py-3">{statusBadge(r.status)}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-primary"
                              onClick={() => setEditingRes({ ...r })}
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            {r.status === 'confirmed' && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                onClick={() => handleStatusChange(r.id, 'cancelled')}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                            {r.status === 'confirmed' && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-muted-foreground hover:text-secondary"
                                onClick={() => handleStatusChange(r.id, 'completed')}
                              >
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              onClick={() => setDeleteId(r.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={!!editingRes} onOpenChange={() => setEditingRes(null)}>
        <DialogContent className="max-w-md" dir="rtl">
          <DialogHeader>
            <DialogTitle className="font-display">تعديل الحجز</DialogTitle>
          </DialogHeader>
          {editingRes && (
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground block mb-1">الاسم</label>
                <Input value={editingRes.name} onChange={e => setEditingRes({ ...editingRes, name: e.target.value })} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1">الهاتف</label>
                <Input value={editingRes.phone} onChange={e => setEditingRes({ ...editingRes, phone: e.target.value })} dir="ltr" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1">الوقت</label>
                <Input value={editingRes.time} onChange={e => setEditingRes({ ...editingRes, time: e.target.value })} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1">عدد الضيوف</label>
                <Input type="number" value={editingRes.guests} onChange={e => setEditingRes({ ...editingRes, guests: parseInt(e.target.value) || 1 })} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1">الحالة</label>
                <select
                  value={editingRes.status}
                  onChange={e => setEditingRes({ ...editingRes, status: e.target.value as StoredReservation['status'] })}
                  className="w-full border border-border rounded-md px-3 py-2 bg-card text-foreground text-sm"
                >
                  <option value="confirmed">مؤكد</option>
                  <option value="cancelled">ملغي</option>
                  <option value="completed">مكتمل</option>
                </select>
              </div>
            </div>
          )}
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setEditingRes(null)}>إلغاء</Button>
            <Button onClick={handleEditSave} className="gold-gradient text-primary-foreground hover:opacity-90">حفظ التعديلات</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent className="max-w-sm text-center" dir="rtl">
          <DialogHeader>
            <DialogTitle className="font-display">حذف الحجز</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground text-sm">هل أنت متأكد من حذف هذا الحجز نهائياً؟ لا يمكن التراجع عن هذا الإجراء.</p>
          <DialogFooter className="gap-2 justify-center">
            <Button variant="outline" onClick={() => setDeleteId(null)}>تراجع</Button>
            <Button variant="destructive" onClick={handleDelete}>حذف نهائي</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
