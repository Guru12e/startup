"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SubRootLayout({ children }) {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <div className="mt-14 p-0 bg-black">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 bg-[#1F2128] items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />

              <Breadcrumb>
                <BreadcrumbList>
                  {pathSegments.map((segment, index) => {
                    const href =
                      "/" + pathSegments.slice(0, index + 1).join("/");
                    const isLast = index === pathSegments.length - 1;

                    const label = segment
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase());

                    return (
                      <div key={href} className="flex items-center">
                        <BreadcrumbSeparator />

                        <BreadcrumbItem>
                          {isLast ? (
                            <BreadcrumbPage>{label}</BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink asChild>
                              <Link href={href}>{label}</Link>
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                      </div>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          <div className="w-full relative overflow-hidden">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
