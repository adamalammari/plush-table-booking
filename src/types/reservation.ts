export interface Table {
  id: number;
  name: string;
  seats: number;
  x: number;
  y: number;
  width: number;
  height: number;
  shape: 'rect' | 'circle';
  zone: string;
  isAvailable: boolean;
}

export interface ReservationData {
  date: Date | null;
  time: string;
  guests: number;
  table: Table | null;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

export type Step = 'date' | 'time' | 'table' | 'details' | 'confirmation';
