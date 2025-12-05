"use client";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navItems } from "@/constant";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Bell, ChevronDown } from "lucide-react";

export function AppSidebar({ ...props }) {
  const pathname = usePathname();

  let activeBase = "/" + pathname.split("/")[1];

  if (activeBase === "/events") {
    activeBase = pathname;
  }

  const activeSection = navItems.find(
    (item) => item.href === activeBase || pathname.startsWith(item.href + "/")
  );

  let subActiveSection = activeSection?.subItems?.find(
    (sub) => sub.href === pathname
  );

  if (pathname === "/experts") {
    subActiveSection = {
      name: "Experts",
      href: "/experts",
      icon: Bell,
    };
  }
  return (
    <Sidebar className="p-0" variant="inset" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <Collapsible asChild defaultOpen>
          <SidebarMenuItem className="mt-12 hover:bg-black/10">
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="text-[#AF7E78] py-4 bg-black/10 flex justify-between items-center gap-2">
                <div className="flex items-center text-xs font-bold gap-2">
                  <subActiveSection.icon className="w-4 h-4" />
                  {subActiveSection?.name || "Menu"}
                </div>
                <ChevronDown className="h-4 w-4" />
              </SidebarGroupLabel>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <NavMain
                active={subActiveSection || activeSection.subItems[0]}
                items={activeSection?.subItems || []}
              />
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
