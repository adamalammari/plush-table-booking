import { Table } from '@/types/reservation';

export const restaurantTables: Table[] = [
  // Main Hall
  { id: 1, name: 'T1', seats: 2, x: 60, y: 80, width: 50, height: 50, shape: 'rect', zone: 'القاعة الرئيسية', isAvailable: true },
  { id: 2, name: 'T2', seats: 2, x: 140, y: 80, width: 50, height: 50, shape: 'rect', zone: 'القاعة الرئيسية', isAvailable: true },
  { id: 3, name: 'T3', seats: 4, x: 240, y: 80, width: 70, height: 50, shape: 'rect', zone: 'القاعة الرئيسية', isAvailable: false },
  { id: 4, name: 'T4', seats: 4, x: 340, y: 80, width: 70, height: 50, shape: 'rect', zone: 'القاعة الرئيسية', isAvailable: true },
  // Terrace
  { id: 5, name: 'T5', seats: 2, x: 60, y: 200, width: 50, height: 50, shape: 'circle', zone: 'التراس', isAvailable: true },
  { id: 6, name: 'T6', seats: 4, x: 160, y: 200, width: 60, height: 60, shape: 'circle', zone: 'التراس', isAvailable: true },
  { id: 7, name: 'T7', seats: 6, x: 270, y: 200, width: 70, height: 70, shape: 'circle', zone: 'التراس', isAvailable: false },
  { id: 8, name: 'T8', seats: 2, x: 380, y: 200, width: 50, height: 50, shape: 'circle', zone: 'التراس', isAvailable: true },
  // VIP
  { id: 9, name: 'VIP1', seats: 6, x: 80, y: 330, width: 90, height: 60, shape: 'rect', zone: 'VIP', isAvailable: true },
  { id: 10, name: 'VIP2', seats: 8, x: 250, y: 330, width: 110, height: 60, shape: 'rect', zone: 'VIP', isAvailable: true },
];

export const timeSlots = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
];
