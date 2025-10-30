"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
const resend = new Resend('re_BP4553xw_PpshSdT1tjyhhT9UUD8hMjjx');

export const sendEmail = async (formData: FormData) => {
  const guestName = formData.get("guestName");
  const senderEmail = formData.get("senderEmail");
  const visitDate = formData.get("visitDate");
  const partySize = formData.get("partySize");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(guestName, 120)) {
    return {
      error: "Please share who we have the pleasure of hosting.",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(visitDate, 30)) {
    return {
      error: "Let us know when you plan to visit.",
    };
  }
  if (partySize && !validateString(partySize, 10)) {
    return {
      error: "Please share a quick note on your party size.",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Tara Bar Reservations <hello@mail.tarabar.com>",
      to: "hello@tarabar.com",
      subject: "New reservation request – Tara Bar",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        guestName: guestName as string,
        visitDate: visitDate as string,
        partySize: partySize ? String(partySize) : "",
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
