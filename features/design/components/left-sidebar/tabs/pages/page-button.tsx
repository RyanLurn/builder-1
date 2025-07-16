import { Button } from "@/components/ui/button";
import { House, PanelTop } from "lucide-react";

export default function PageButton({ name }: { name: string }) {
  return (
    <Button variant="ghost" className="w-full justify-start">
      {name === "Home" ? <House /> : <PanelTop />}
      {name}
    </Button>
  );
}
