"use client";

import { motion } from "framer-motion";
import { Building, Home, Monitor } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Job",
    href: "/", // Active when path is "/" or any subpath not prefixed by "/home"
    icon: <Building className="size-5" />,
  },
  {
    name: "Freelance",
    href: "/freelance", // Active when path is "/home" or any subpath prefixed by "/home"
    icon: <Monitor className="size-5" />,
  },
];

const SwitchBtn = () => {
  const currentPath = usePathname();

  return (
    <ul className="relative flex gap-1 px-1 md:text-[14px] md:py-1 border shadow-sm rounded-full  ">
      {links.map(({ name, icon, href }) => (
        <motion.li key={name} className="relative py-[2px]">
          <Link
            href={href}
            className={`cursor-pointer transition-all ease-in duration-150 px-4 flex items-center gap-2 py-1 ${
              href === "/" && currentPath === "/"
                ? "text-background"
                : "hover:bg-[#0071bc6a] hover:rounded-full "
            }`}
          >
            {icon}
            <span className="hidden md:flex items-center">{name}</span>
          </Link>

          {href === "/" && currentPath === "/" && (
            <motion.span
              layoutId="activeIndicator"
              className="absolute bg-[#0071BC] rounded-full z-[-1]"
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
              style={{
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
              }}
            />
          )}
        </motion.li>
      ))}
    </ul>
  );
};

export default SwitchBtn;
