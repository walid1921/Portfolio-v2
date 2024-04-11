import React from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type contactFormEmailProps = {
  message: string;
  senderEmail: string;
};

const ContactFormEmail = ({ message, senderEmail }: contactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>❗️ Walid your portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border-black my-10 px-10 py-4 rounded-md">
              <Text className="leading-tight flex justify-center bold text-2xl ">
                Your contact form
              </Text>
              <Text className="flex justify-center">{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail} </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
