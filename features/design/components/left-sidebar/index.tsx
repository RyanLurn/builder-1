"use client";

import { Separator } from "@/components/ui/separator";
import LeftSidebarHeader from "@/features/design/components/left-sidebar/header";
import LeftSidebarAssetsTab from "@/features/design/components/left-sidebar/tabs/assets";
import LeftSidebarLayersTab from "@/features/design/components/left-sidebar/tabs/layers";
import LeftSidebarPagesTab from "@/features/design/components/left-sidebar/tabs/pages";
import { useState } from "react";

type ActiveTabType = "pages" | "layers" | "assets";

export default function LeftSidebar() {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("pages");

  function switchTab(tab: string) {
    setActiveTab(tab as ActiveTabType);
  }

  return (
    <div className="h-full w-3xs bg-sidebar p-2">
      <LeftSidebarHeader activeTab={activeTab} switchTab={switchTab} />
      <Separator className="my-2" />
      {activeTab === "pages" && <LeftSidebarPagesTab />}
      {activeTab === "layers" && <LeftSidebarLayersTab />}
      {activeTab === "assets" && <LeftSidebarAssetsTab />}
    </div>
  );
}

export type { ActiveTabType };
