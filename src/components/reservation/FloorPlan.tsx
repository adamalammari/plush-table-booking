import { Table } from '@/types/reservation';
import { restaurantTables } from '@/data/tables';
import { motion } from 'framer-motion';

interface FloorPlanProps {
  selectedTable: Table | null;
  guests: number;
  onSelect: (table: Table) => void;
}

export default function FloorPlan({ selectedTable, guests, onSelect }: FloorPlanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center"
    >
      <h2 className="text-2xl sm:text-3xl font-display text-foreground mb-2">اختر طاولتك</h2>
      <p className="text-muted-foreground font-body mb-4">اضغط على طاولة متاحة لاختيارها</p>

      {/* Legend */}
      <div className="flex gap-6 mb-4 text-xs font-body text-muted-foreground">
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm border-2 border-primary bg-primary/10 inline-block" /> متاحة</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-muted inline-block" /> محجوزة</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm gold-gradient inline-block" /> اختيارك</span>
      </div>

      {/* SVG Floor Plan */}
      <div className="border border-border rounded-xl bg-card p-4 w-full max-w-[500px] overflow-x-auto">
        <svg viewBox="0 0 480 420" className="w-full h-auto">
          {/* Zone Labels */}
          <text x="240" y="55" textAnchor="middle" className="fill-muted-foreground text-[11px] font-body">القاعة الرئيسية</text>
          <text x="240" y="180" textAnchor="middle" className="fill-muted-foreground text-[11px] font-body">التراس</text>
          <text x="240" y="310" textAnchor="middle" className="fill-muted-foreground text-[11px] font-body">VIP</text>

          {/* Zone dividers */}
          <line x1="20" y1="160" x2="460" y2="160" stroke="hsl(40 45% 80%)" strokeDasharray="4" />
          <line x1="20" y1="295" x2="460" y2="295" stroke="hsl(40 45% 80%)" strokeDasharray="4" />

          {restaurantTables.map(table => {
            const isSelected = selectedTable?.id === table.id;
            const canFit = table.seats >= guests;
            const available = table.isAvailable && canFit;

            const fill = isSelected
              ? 'url(#goldGrad)'
              : available
              ? 'hsl(38 85% 38% / 0.08)'
              : 'hsl(0 0% 90%)';
            const stroke = isSelected
              ? 'hsl(38 85% 38%)'
              : available
              ? 'hsl(38 85% 38%)'
              : 'hsl(0 0% 80%)';
            const cursor = available ? 'pointer' : 'not-allowed';
            const opacity = available || isSelected ? 1 : 0.5;

            return (
              <g
                key={table.id}
                onClick={() => available && onSelect(table)}
                style={{ cursor, opacity }}
              >
                {table.shape === 'rect' ? (
                  <rect
                    x={table.x}
                    y={table.y}
                    width={table.width}
                    height={table.height}
                    rx={6}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={isSelected ? 2.5 : 1.5}
                  />
                ) : (
                  <ellipse
                    cx={table.x + table.width / 2}
                    cy={table.y + table.height / 2}
                    rx={table.width / 2}
                    ry={table.height / 2}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={isSelected ? 2.5 : 1.5}
                  />
                )}
                <text
                  x={table.x + table.width / 2}
                  y={table.y + table.height / 2 - 4}
                  textAnchor="middle"
                  className={`text-[11px] font-display ${isSelected ? 'fill-primary-foreground' : 'fill-foreground'}`}
                  style={{ fontWeight: 600 }}
                >
                  {table.name}
                </text>
                <text
                  x={table.x + table.width / 2}
                  y={table.y + table.height / 2 + 10}
                  textAnchor="middle"
                  className="fill-muted-foreground text-[9px] font-body"
                >
                  {table.seats} أشخاص
                </text>
              </g>
            );
          })}

          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(38 85% 38%)" />
              <stop offset="100%" stopColor="hsl(38 85% 45%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {selectedTable && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-center font-body text-sm"
        >
          <span className="text-primary font-semibold">{selectedTable.name}</span>
          <span className="text-muted-foreground"> — {selectedTable.zone} — {selectedTable.seats} مقاعد</span>
        </motion.div>
      )}
    </motion.div>
  );
}
