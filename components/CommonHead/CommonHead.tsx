import { CommonHeadWrap } from "@/styles/StyledComponents/CommonHeadWrap";
import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";

interface commonHeadProps {
  headText: string;
  subText: string;
}

const CommonHead = ({ headText, subText }: commonHeadProps) => {
  return (
    <CommonHeadWrap>
      <Container fixed>
        <Box className="headContent">
          <Typography variant="h1">{headText}</Typography>
          <Typography variant="body1">{subText}</Typography>
        </Box>
      </Container>
    </CommonHeadWrap>
  );
};

export default CommonHead;
