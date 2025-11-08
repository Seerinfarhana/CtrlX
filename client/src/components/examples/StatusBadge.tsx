import { StatusBadge } from '../StatusBadge';

export default function StatusBadgeExample() {
  return (
    <div className="flex gap-4">
      <StatusBadge status="available" />
      <StatusBadge status="reserved" />
      <StatusBadge status="sold" />
    </div>
  );
}
