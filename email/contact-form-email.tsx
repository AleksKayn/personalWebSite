import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  guestName: string;
  visitDate: string;
  partySize: string;
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  guestName,
  visitDate,
  partySize,
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New reservation request for Tara Bar</Preview>
      <Tailwind>
        <Body className="text-black bg-gray-100">
          <Container>
            <Section className="px-10 py-6 my-10 bg-white rounded-md borderBlack">
              <Heading className="leading-tight">
                New request from {guestName}
              </Heading>
              <Text>Visit date: {visitDate}</Text>
              {partySize ? <Text>Party size: {partySize}</Text> : null}
              <Hr />
              <Text>{message}</Text>
              <Hr />
              <Text>Reply to: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
