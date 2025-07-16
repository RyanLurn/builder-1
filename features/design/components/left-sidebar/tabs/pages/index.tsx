import AddMenu from "@/features/design/components/left-sidebar/tabs/pages/add-menu";
import PagesList from "@/features/design/components/left-sidebar/tabs/pages/pages-list";

export default function LeftSidebarPagesTab() {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <div>Pages</div>
        <AddMenu />
      </div>
      <PagesList />
    </div>
  );
}
