"use client";

import React, { useRef, useState, FormEvent } from "react";
import Section from "./section";
import Button from "./ui/button";
import { BsFillSendFill } from "react-icons/bs";
import Image from "next/image";
import grid from "@/public/grid.png";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

type Errors = {
  name: string;
  email?: string;
  subject?: string;
  message?: string;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const { ref } = useSectionInView("Contact", 0.5);

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: Errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!/@/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!subject) {
      errors.subject = "Subject is required";
    }

    if (!message) {
      errors.message = "Message is required";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Uncomment the emailjs code here once you integrate it
      // emailjs
      //   .sendForm(
      //     "service_75azj3m",
      //     "template_lzm7tak",
      //     formRef.current,
      //     "-EZm67h-WYQsh0NsQ"
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //       toast.success("Message sent successfully");
      //       resetForm(); // Reset the input fields
      //     },
      //     (error) => {
      //       console.log(error.text);
      //       toast.error("Something went wrong");
      //     }
      // );
    }
  };

  return (
    <Section id="contact" className="scroll-mt-28 ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container md:pb-10 "
      >
        <p className="lg:text-3xl text-2xl pl-[20px] font-medium bg-gradient-to-br from-white to-[#4d4d4d] bg-clip-text text-transparent mb-10">
          Contact
        </p>

        <div className="md:flex p-0.25 rounded-[6px] bg-conic-gradient w-full">
          <div className="relative p-8 bg-[#181818] rounded-[6px] h-full w-full overflow-hidden xl:pt-15 xl:px-15">
            <div className="absolute top-0 left-0  w-full z-2">
              <Image src={grid} alt="grid" className="w-full" />
            </div>
            <div className="flex flex-col h-full ">
              <form
                ref={formRef}
                action={async (formData) => {
                  await sendEmail(formData);
                }}
                className="w-[min(100%,38rem)] flex flex-col gap-5 mx-auto z-2"
              >

                <div className="mb-5">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter your email"
                    maxLength={50}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`inputForm ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />

                  {errors.email && (
                    <div className="text-red-500 text-xs mt-2">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    name="user_subject"
                    placeholder="Subject"
                    maxLength={50}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`inputForm ${
                      errors.subject ? "border-red-500" : ""
                    }`}
                  />

                  {errors.subject && (
                    <div className="text-red-500 text-xs mt-2">
                      {errors.subject}
                    </div>
                  )}
                </div>

                <div className="mb-5">
                  <textarea
                    name="message"
                    rows={5}
                    maxLength={5000}
                    placeholder="Write your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`inputForm resize-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />

                  {errors.message && (
                    <div className="text-red-500 text-xs mt-2">
                      {errors.message}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  text="Send"
                  bgColor="#289061"
                  borderColor="#289061"
                  hoverBg="#4b9876"
                  icon={<BsFillSendFill size={18} />}
                />
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;
