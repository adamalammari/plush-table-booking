export interface StoredReservation {
  id: string;
  date: string;
  time: string;
  guests: number;
  tableName: string;
  tableZone: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
  status: 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
}

const STORAGE_KEY = 'golden_table_reservations';

export function getReservations(): StoredReservation[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function addReservation(reservation: Omit<StoredReservation, 'id' | 'createdAt' | 'status'>): StoredReservation {
  const reservations = getReservations();
  const newReservation: StoredReservation = {
    ...reservation,
    id: `R-${Date.now().toString(36).toUpperCase()}`,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  };
  reservations.push(newReservation);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
  return newReservation;
}

export function updateReservation(id: string, updates: Partial<StoredReservation>): void {
  const reservations = getReservations();
  const index = reservations.findIndex(r => r.id === id);
  if (index !== -1) {
    reservations[index] = { ...reservations[index], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
  }
}

export function deleteReservation(id: string): void {
  const reservations = getReservations().filter(r => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
}
