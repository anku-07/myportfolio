import { CommonHeadWrap } from "@/styles/StyledComponents/CommonHeadWrap";
import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";

const CommonHead = () => {
  return (
    <CommonHeadWrap>
      <Container fixed>
        <Box className="headContent">
          <Typography variant="h1">My works</Typography>
          <Typography variant="body1">Showcase About Works</Typography>
        </Box>
      </Container>
    </CommonHeadWrap>
  );
};

export default CommonHead;
