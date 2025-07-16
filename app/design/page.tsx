import LeftSidebar from "@/features/design/components/left-sidebar";
import { Separator } from "@/components/ui/separator";
import Toolbar from "@/features/design/components/toolbar";
import RightSidebar from "@/features/design/components/right-sidebar";
import Canvas from "@/features/design/components/canvas";

export default function DesignPage() {
  return (
    <div className="flex h-full w-full flex-col">
      <Toolbar />
      <Separator />
      <div className="flex w-full flex-1">
        <LeftSidebar />
        <Canvas />
        <RightSidebar />
      </div>
    </div>
  );
}
