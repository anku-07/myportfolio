import { WrapperStyle } from "@/styles/StyledComponents/WrapperStyle";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <WrapperStyle>
      <Header />
      <Box className="body_content">{children}</Box>
      <Footer />
    </WrapperStyle>
  );
};

export default Wrapper;
