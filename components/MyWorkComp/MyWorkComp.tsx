import { MyWorkCompStyle } from "@/styles/StyledComponents/MyWorkCompStyle";
import React from "react";
import Container from "@mui/material/Container";
import { Box, Grid2 } from "@mui/material";
import MyWorksCard from "../MyWorksCard/MyWorksCard";
import { myWorksCardData } from "@/json/mock/demo.mock";

const MyWorkComp = () => {
  return (
    <MyWorkCompStyle>
      <Container fixed>
        <Box className="worksBlk">
          <Grid2 container spacing={4}>
            {myWorksCardData.map((data, index) => (
              <Grid2 size={{ md: 4 }} key={index}>
                <MyWorksCard {...data} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Container>
    </MyWorkCompStyle>
  );
};

export default MyWorkComp;
