import Contact from "@/components/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
