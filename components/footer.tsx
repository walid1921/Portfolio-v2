"use client";

import React from "react";
import Section from "./section";
import Popsup from "./ui/popsup";

import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

//! socials
export const socials = [
  {
    id: "1",
    title: "Github",
    icon: <BsGithub size={28} />,
    url: "https://github.com/walid1921?tab=repositories",
  },
  {
    id: "2",
    title: "Instagram",
    icon: <FiInstagram size={28} />,
    url: "https://instagram.com/dev.n.des?igshid=Y2IzZGU1MTFhOQ==",
  },
  {
    id: "3",
    title: "Linkedin",
    icon: <FaLinkedin size={28} />,
    url: "https://www.linkedin.com/in/walid-kouider-ayad",
  },
  {
    id: "4",
    title: "Mail",
    icon: <MdEmail size={28} />,
    url: "mailto:kouiderayadwalid@gmail.com",
  },
];

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 w-full ">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-8 flex-wrap">
          {socials.map((item) => (
            <Popsup
              key={item.id}
              side="top"
              link={item.url}
              icon={item.icon}
              content={item.title}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
