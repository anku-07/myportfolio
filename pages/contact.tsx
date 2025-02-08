import CommonHead from "@/components/CommonHead/CommonHead";
import ContactFrom from "@/components/ContactFrom/ContactFrom";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Wrapper from "@/layout/Wrapper/Wrapper";
import React from "react";

const Contact = () => {
  return (
    <Wrapper>
      <CommonHead headText="Contact Me" subText="For Any Project Knock Us" />
      <ContactFrom />
      <ContactInfo />
    </Wrapper>
  );
};

export default Contact;
