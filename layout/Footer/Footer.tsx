import asset from "@/json/asset";
import { FooterWrap } from "@/styles/StyledComponents/FooterWrap";
import FacebookIcon from "@/ui/Icons/FacebookIcon";
import InstaIcon from "@/ui/Icons/InstaIcon";
import TwitterIcon from "@/ui/Icons/TwitterIcon";
import {
  Box,
  Typography,
  Container,
  Grid2,
  List,
  ListItem,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ftrIcon = [
  {
    icon: <FacebookIcon />,
  },
  {
    icon: <TwitterIcon />,
  },
  {
    icon: <InstaIcon />,
  },
];

const Footer = () => {
  return (
    <FooterWrap>
      <Container fixed>
        <Box className="ftr_top">
          <Typography variant="body1">Get in Touch With Us</Typography>
          <Link href="mailto:techadi960@gmail.com">techadi960@gmail.com</Link>
        </Box>
        <Box className="ftr_middle">
          <Grid2 container spacing={{ md: 5, sm: 3, xs: 2 }}>
            <Grid2 size={{ md: 5 }}>
              <Box>
                <Link href="/" className="footer_logo">
                  <Image
                    src={asset.ftr_logo}
                    width={240}
                    height={42}
                    alt="ftr_logo"
                  />
                </Link>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 3.5 }}>
              <Box className="address_blk">
                <Typography variant="body1">Street Avenue 21, CA</Typography>
                <Typography variant="body1">0-8-00-888-000</Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 3.5 }}>
              <Box className="contact_blk">
                <Link href="tel:6296909031">6296909031</Link>
                <List disablePadding>
                  {ftrIcon.map((data, index) => (
                    <ListItem key={index} disablePadding>
                      <Link href="#">{data.icon}</Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
        <Box className="copyBlk">
          <Typography variant="body1">
            © 2025. Ideapeel. All rights reserved.{" "}
          </Typography>
        </Box>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
