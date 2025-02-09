import asset from "@/json/asset";
import { HeaderDrawer } from "@/styles/StyledComponents/HeaderDrawer";
import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrap";
import CrossIcon from "@/ui/Icons/CrossIcon";
import HambarIcon from "@/ui/Icons/HambarIcon";
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
  Drawer,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

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
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrap>
      <AppBar position="static" component="nav" className="headercontainer">
        <Container fixed>
          <Toolbar>
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
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => router.push("/contact")}
              >
                Contact
              </Button>
            </Box>
            <Box className="hambar">
              <IconButton onClick={toggleDrawer}>
                <HambarIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <HeaderDrawer open={open} onClose={toggleDrawer} anchor="right">
        <IconButton className="crossBar" onClick={toggleDrawer}>
          <CrossIcon />
        </IconButton>
        <Box className="drawerLogo">
          <Link href="/">
            <Image
              src={asset.headLogo}
              width={125}
              height={22}
              alt="headLogo"
            />
          </Link>
        </Box>
        <List disablePadding className="drawerList">
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Link href={item.route}>{item.itemName}</Link>
            </ListItem>
          ))}
        </List>
      </HeaderDrawer>
    </HeaderWrap>
  );
};

export default Header;
