import { Badge } from "@/components/ui/badge";

export default function Canvas() {
  return (
    <div className="relative h-full flex-1">
      <Badge className="absolute top-2 right-2 z-10">Preview</Badge>
    </div>
  );
}
