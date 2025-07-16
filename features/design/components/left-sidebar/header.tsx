import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ActiveTabType } from "@/features/design/components/left-sidebar";

export default function LeftSidebarHeader({
  activeTab,
  switchTab
}: {
  activeTab: ActiveTabType;
  switchTab: (tab: string) => void;
}) {
  return (
    <Tabs
      value={activeTab}
      onValueChange={switchTab}
      className="w-full items-center"
    >
      <TabsList className="w-full">
        <TabsTrigger value="pages">Pages</TabsTrigger>
        <TabsTrigger value="layers">Layers</TabsTrigger>
        <TabsTrigger value="assets">Assets</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
