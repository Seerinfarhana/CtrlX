import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: "available" | "reserved" | "sold";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig = {
    available: {
      label: "Available",
      className: "bg-green-500 hover:bg-green-600 text-white border-green-600",
    },
    reserved: {
      label: "Reserved",
      className: "bg-amber-500 hover:bg-amber-600 text-white border-amber-600",
    },
    sold: {
      label: "Sold",
      className: "bg-red-500 hover:bg-red-600 text-white border-red-600",
    },
  };

  const config = statusConfig[status];

  return (
    <Badge className={config.className} data-testid={`badge-status-${status}`}>
      {config.label}
    </Badge>
  );
}
