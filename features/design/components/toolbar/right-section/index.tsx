import ModeToggle from "@/features/design/components/toolbar/right-section/mode-toggle";
import UserAvatar from "@/features/design/components/toolbar/right-section/user-avatar";

export default function ToolbarRightSection() {
  return (
    <div className="flex items-center gap-x-2">
      <UserAvatar />
      <ModeToggle />
    </div>
  );
}
