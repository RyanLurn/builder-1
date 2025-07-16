import ToolbarLeftSection from "@/features/design/components/toolbar/left-section";
import ToolbarRightSection from "@/features/design/components/toolbar/right-section";

export default function Toolbar() {
  return (
    <div className="flex w-full items-center justify-between bg-sidebar p-3">
      <ToolbarLeftSection />
      <ToolbarRightSection />
    </div>
  );
}
