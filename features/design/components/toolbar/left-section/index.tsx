import InsertButton from "@/features/design/components/toolbar/left-section/insert-button";
import MenuButton from "@/features/design/components/toolbar/left-section/menu-button";

export default function ToolbarLeftSection() {
  return (
    <div className="flex items-center gap-x-2">
      <MenuButton />
      <InsertButton />
    </div>
  );
}
