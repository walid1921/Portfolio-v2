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
import Image from "next/image";
import grid from "@/public/grid.png";
import Popsup from "../ui/popsup";

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
      url: "mailto:",
    },
    {
      title: "Phone",
      icon: <Phone size={20} />,
      url: "tel:",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
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

        <div className="px-[1rem]">
          <p
            className="
          text-muted-foreground
          "
          >
            Contact
          </p>
          <ul className="flex items-center justify-center gap-8 pt-4">
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
        <div className="flex flex-col gap-6 relative border-t border-dashed px-[1rem] pb-5 pt-3">
          <Image
            src={grid}
            alt="grid"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className="  flex items-start flex-col justify-start gap-2 rounded-md py-2 px-4">
            <p className="text-lg font-bold">03/12/2024</p>
            <p>Bremen, Germany</p>
          </div>

          <PrimaryBtn>
            <Link href="/" className="flex items-center justify-center gap-4">
              {" "}
              Let's Talk <BsFillSendFill size={16} />{" "}
            </Link>
          </PrimaryBtn>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}