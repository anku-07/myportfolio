import { ContactInfoWrap } from "@/styles/StyledComponents/ContactInfoWrap";
import React from "react";
import Container from "@mui/material/Container";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import asset from "@/json/asset";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <ContactInfoWrap>
      <Container fixed>
        <figure>
          <Image
            src={asset.laptop_img}
            width={1200}
            height={700}
            alt="laptop_img"
          />
        </figure>
        <Stack
          className="contact_blk"
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant="body1">Street Avenue 21, CA</Typography>
          <Link href="" className="phone">
            +91 6296909031
          </Link>
          <Link href="">techadi960@gmail.com</Link>
        </Stack>
      </Container>
    </ContactInfoWrap>
  );
};

export default ContactInfo;
