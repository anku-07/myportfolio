import { AboutMeWrap } from "@/styles/StyledComponents/AboutMeWrap";
import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import asset from "@/json/asset";

const AboutMe = () => {
  return (
    <AboutMeWrap className="cmnGap">
      <Container fixed>
        <Grid2 container spacing={7} alignItems="center">
          <Grid2 size={{ md: 7, xs: 12 }}>
            <Box className="myDetails">
              <Typography variant="h2">
                Let’s get know <br /> about me closer
              </Typography>
              <Typography variant="body1">
                Aaronn is a New York-based visual designer focusing on branding
                and visual identity. Her portfolio showcases her wide range of
                work, spanning books, posters and web design.
              </Typography>

              <Button className="containedPrimary">
                Discover More About Me
              </Button>
            </Box>
          </Grid2>
          <Grid2 size={{ md: 5, xs: 12 }}>
            <figure>
              <Image
                src={asset.topRectangle}
                width={110}
                height={34}
                alt="leftRectangle"
                className="topImg"
              />
              <Image
                src={asset.leftRectangle}
                width={55}
                height={178}
                alt="leftRectangle"
                className="leftImg"
              />
              <Image
                src={asset.myImg}
                width={454}
                height={506}
                alt="developerImg"
                className="myImg"
              />
            </figure>
          </Grid2>
        </Grid2>
      </Container>
    </AboutMeWrap>
  );
};

export default AboutMe;
