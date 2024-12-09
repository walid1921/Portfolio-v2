import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { FiHome } from "react-icons/fi";
import {
  Component,
  Folder,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
  UserRound,
  WandSparkles,
} from "lucide-react";
import Link from "next/link";
import PrimaryBtn from "../ui/primaryBtn";
import { BsFillSendFill } from "react-icons/bs";
import Popsup from "../ui/popsup";
import Logo from "../ui/Logo";
import { cn } from "@/lib/utils";
import Founder from "./founder";
import GridPattern from "../ui/grid-pattern";

const data = {
  navMain: [
    {
      title: "",
      url: "#",
      items: [
        {
          title: "Home",
          url: "/freelance",
          icon: FiHome,
        },
        {
          title: "About",
          icon: UserRound,
          url: "/freelance/about",
        },
        {
          title: "Projects",
          icon: Folder,
          url: "/freelance/projects",
        },
        {
          title: "Services",
          icon: Component,
          url: "/freelance/services",
        },
        {
          title: "Pricing",
          icon: WandSparkles,
          url: "/freelance/pricing",
        },
        {
          title: "Contact",
          icon: Send,
          url: "/freelance/contact",
        },
      ],
    },
  ],
  contact: [
    {
      title: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://instagram.com/dev.n.des?igshid=Y2IzZGU1MTFhOQ==",
    },
    {
      title: "Linkedin",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/walid-kouider-ayad",
    },
    {
      title: "Mail",
      icon: <Mail size={20} />,
      url: "mailto:kouiderayadwalid@gmail.com",
    },
    {
      title: "Phone",
      icon: <Phone size={20} />,
      url: "tel:015118559079",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <Logo width={170} />
      <div className=" absolute  top-[20px] -right-[40px]  ">
        <SidebarTrigger />
      </div>
      <SidebarContent >
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="px-[1rem]">
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="flex items-center text-[16px] gap-5 hover:bg-bgMain hover:rounded-md py-2 px-4"
                    >
                      <Link href={item.url}>
                        {" "}
                        <item.icon /> {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <div className="flex flex-col gap-5">
          <div className="px-[1rem] ">
            <ul className="hidden md:flex items-center justify-center gap-8 pt-4">
              {data.contact.map((item) => (
                <Popsup
                  key={item.title}
                  side="top"
                  link={item.url}
                  icon={item.icon}
                  content={item.title}
                />
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6 relative border-t border-dashed border-[#ffffff14] px-[1rem] md:pb-12 pb-6 pt-12">
            <GridPattern
              width={20}
              height={20}
              x={-1}
              y={-1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
              )}
            />

            <Founder
              url={"/walid.jpg"}
              name={"Walid Kouider Ayad"}
              subtitle={"Available for freelance work"}
            />

            <PrimaryBtn>
              <Link href="/" className="flex items-center justify-center gap-4">
                {" "}
                Let's Talk <BsFillSendFill size={16} />{" "}
              </Link>
            </PrimaryBtn>
          </div>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
