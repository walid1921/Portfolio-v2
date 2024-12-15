"use client";

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import Globe from "../ui/globe";
import Particles from "../ui/particles";
import Meteors from "../ui/meteors";
import { MapPin, Phone } from "lucide-react";

//! socials
export const socials = [
  {
    id: "1",
    title: "Instagram",
    icon: <FiInstagram size={28} />,
    url: "https://instagram.com/dev.n.des?igshid=Y2IzZGU1MTFhOQ==",
  },
  {
    id: "2",
    title: "Linkedin",
    icon: <FaLinkedin size={28} />,
    url: "https://www.linkedin.com/in/walid-kouider-ayad",
  },
  {
    id: "3",
    title: "Mail",
    icon: <MdEmail size={28} />,
    url: "mailto:kouiderayadwalid@gmail.com",
  },
];

const FreelanceFooter = () => {
  return (
    <footer>
      <div className="relative w-full flex  items-center justify-center overflow-hidden  md:pb-60 md:pt-32 py-32">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-background to-[#2A9465] bg-clip-text text-center md:text-8xl text-5xl font-semibold leading-none text-transparent ">
          Dev & Des
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

      <div className="!px-0 !pt-10 w-full border-t border-[#2b2d2d]">
        <div className="container grid grid-cols-1 md:grid-cols-5 gap-20 py-10">
          <div className="flex flex-col items-start col-span-2">
            <h2 className="text-2xl font-semibold">[ Dev & Des ]</h2>
            <p className="text-sm text-gray-400 mt-4">
              Empowering your business with innovative solutions. Design,
              development, and support to help you thrive in the digital age.
            </p>
          </div>

          {/* Navbar Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-secondary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-secondary">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-secondary">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-secondary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-secondary">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-secondary">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-4">
                <span className="border p-2 rounded-full">
                  <Phone size={20} />{" "}
                </span>

                <div className="flex flex-col">
                  <span>Give us a call</span>

                  <a
                    href="mailto:kouiderayadwalid@gmail.com"
                    className="hover:text-secondary text-sm"
                  >
                    +49 123 456 789
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="border p-2 rounded-full">
                  <MdEmail size={20} />{" "}
                </span>

                <div className="flex flex-col">
                  <span>Send us an email</span>

                  <a
                    href="mailto:kouiderayadwalid@gmail.com"
                    className="hover:text-secondary text-sm"
                  >
                    koud@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="border p-2 rounded-full">
                  <MapPin size={20} />{" "}
                </span>

                <div className="flex flex-col">Bremen, Germany</div>
              </li>

              <li className="flex items-center gap-4">
                <span className="border p-2 rounded-full">
                  <FiInstagram size={20} />{" "}
                </span>
                <a
                  href="https://instagram.com/dev.n.des?igshid=Y2IzZGU1MTFhOQ=="
                  className="hover:text-secondary"
                >
                  @dev.n.des
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="caption text-n-4 lg:block container border-t border-[#2b2d2d] text-center py-5">
          Copyright © {new Date().getFullYear()} [Dev & Des]. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default FreelanceFooter;
