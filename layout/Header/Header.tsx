import asset from "@/json/asset";
import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrap";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Badge,
  Box,
  List,
  ListItem,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  {
    itemName: "Home",
    route: "/",
  },
  {
    itemName: "About me",
    route: "/",
  },
  {
    itemName: "My works",
    route: "/my-works",
  },
];

const Header = () => {
  return (
    <HeaderWrap>
      <AppBar position="static" component="nav" className="headercontainer">
        <Container fixed>
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <Link href="/" className="headerLogo">
              <Image
                src={asset.headLogo}
                width={125}
                height={22}
                alt="headLogo"
              />
            </Link>
            <Box className="nav_bar">
              <List disablePadding>
                {navItems.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <Link href={item.route}>{item.itemName}</Link>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box className="hdr_rgt">
              <Button type="button" variant="contained" color="primary">
                Contact
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderWrap>
  );
};

export default Header;
