import { AppSidebar } from "@/components/freelance-components/app-sidebar";
import LogoTextSmall from "@/components/ui/logoTextSmall";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function FreelanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="relative">
      <AppSidebar />
      <SidebarInset>
        <div className="flex sticky top-0 py-3  justify-between h-16 shrink-0 md:hidden items-center gap-2 px-4 z-50 bg-background ">
          <SidebarTrigger className="-ml-1" />
          <LogoTextSmall className="mb-2" />
        </div>
        <div className="flex flex-1 flex-col gap-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
