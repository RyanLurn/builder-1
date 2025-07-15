import Toolbar from "@/components/toolbar/toolbar";
import LeftSidebar from "@/components/left-sidebar/left-sidebar";
import Canvas from "@/components/canvas/canvas";
import RightSidebar from "@/components/right-sidebar/right-sidebar";

export default function DesignPage() {
  return (
    <div>
      <Toolbar />
      <LeftSidebar />
      <Canvas />
      <RightSidebar />
    </div>
  );
}
