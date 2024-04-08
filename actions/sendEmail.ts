"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("user_email");
  const senderSubject = formData.get("user_subject");

  if (!validateString(message)) {
    return { error: "Invalid message" };
  }
  if (!validateString(senderSubject)) {
    return { error: "Invalid subject" };
  }
  if (!validateString(senderEmail)) {
    return { error: "Invalid email" };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "kouiderayadwalid@gmail.com",
      subject: senderSubject as string,
      reply_to: senderEmail as string,
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
