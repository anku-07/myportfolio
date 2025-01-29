import { BannerWrap } from "@/styles/StyledComponents/BannerWrap";
import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Container } from "@mui/material";
import RightArrowIcon from "@/ui/Icons/RightArrowIcon";

const Banner = () => {
  return (
    <BannerWrap>
      <Container fixed>
        <Typography variant="h1">
          End-to-End Development, Seamless Results
        </Typography>
        <Box className="btnWrap">
          <Button endIcon={<RightArrowIcon />} className="containedPrimary">
            Explore works
          </Button>
        </Box>
      </Container>
    </BannerWrap>
  );
};

export default Banner;
