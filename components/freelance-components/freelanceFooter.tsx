"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { MapPin, Phone } from "lucide-react";
import Globe from "../ui/globe";
import Particles from "../ui/particles";
import Meteors from "../ui/meteors";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/lib/data";
import LogoText from "../ui/logoText";

// Contact Information
const contactInfo = [
  {
    id: "1",
    label: "Give us a call",
    icon: <Phone size={20} />,
    text: "+49 123 456 789",
    href: "tel:+49123456789",
  },
  {
    id: "2",
    label: "Send us an email",
    icon: <MdEmail size={20} />,
    text: "koud@gmail.com",
    href: "mailto:koud@gmail.com",
  },
  {
    id: "3",
    label: "Location",
    icon: <MapPin size={20} />,
    text: "Bremen, Germany",
  },
  {
    id: "4",
    label: "Instagram",
    icon: <FiInstagram size={20} />,
    text: "@dev.n.des",
    href: "https://instagram.com/dev.n.des?igshid=Y2IzZGU1MTFhOQ==",
  },
];

const FreelanceFooter = () => {
  return (
    <footer>
      {/* Top Section */}
      <div className="relative w-full flex items-center justify-center overflow-hidden md:pb-60 md:pt-32 py-32">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-background to-[#2A9465] bg-clip-text text-center md:text-8xl text-5xl font-semibold leading-none text-transparent">
          [ Dev & Des ]{" "}
        </span>
        <Globe className="top-32 z-40" />
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={"#5d5d5d"}
          refresh
        />
        <Meteors number={10} />
      </div>

      {/* Footer Columns */}
      <div className="!px-0 !pt-10 w-full border-t border-[#2b2d2d]">
        <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-20 py-10">
          {/* Logo and Description */}
          <div className="flex flex-col gap-8 items-center md:items-start col-span-2 text-center md:text-left">
            <LogoText />
            <p className="text-sm md:text-normal mt-4">
              Empowering your business with innovative solutions. Design,
              development, and support to help you thrive in the digital age.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="hover:text-secondary">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="hover:text-secondary">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact) => (
                <li key={contact.id} className="flex items-center gap-4">
                  <span className="border p-2 rounded-full">
                    {contact.icon}
                  </span>
                  <div className="flex flex-col">
                    <span>{contact.label}</span>
                    {contact.href ? (
                      <Link
                        href={contact.href}
                        className="hover:text-secondary text-sm"
                      >
                        {contact.text}
                      </Link>
                    ) : (
                      <span className="text-sm">{contact.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <p className="caption text-n-4 lg:block container border-t border-[#2b2d2d] text-center py-5">
          Copyright © {new Date().getFullYear()} [Dev & Des]. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default FreelanceFooter;
