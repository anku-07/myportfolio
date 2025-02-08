import { MyWorkCompStyle } from "@/styles/StyledComponents/MyWorkCompStyle";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Button, Grid2 } from "@mui/material";
import MyWorksCard from "../MyWorksCard/MyWorksCard";
import { myWorksCardData } from "@/json/mock/demo.mock";
import { HashLoader } from "react-spinners";

const MyWorkComp = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [color] = useState("#ffffff");
  const handelLoadMore = () => {
    setLoadMore(true);
  };

  return (
    <MyWorkCompStyle>
      <Container fixed>
        <Box className="worksBlk">
          <Grid2 container spacing={4}>
            {myWorksCardData.map((data, index) => (
              <Grid2
                size={{ lg: data.gridSize, md: 6, sm: 6, xs: 12 }}
                key={index}
              >
                <MyWorksCard {...data} />
              </Grid2>
            ))}
          </Grid2>
        </Box>

        <Box className="loading_blk">
          <Button onClick={handelLoadMore} disableRipple>
            {loadMore ? (
              <HashLoader
                color={color}
                loading={loadMore}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "  Load More"
            )}
          </Button>
        </Box>
      </Container>
    </MyWorkCompStyle>
  );
};

export default MyWorkComp;
