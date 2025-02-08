import { ProjectsCompStyle } from "@/styles/StyledComponents/ProjectsCompStyle";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid2 } from "@mui/material";
import RightArrowIcon from "@/ui/Icons/RightArrowIcon";

import ProjectCard from "../ProjectCard/ProjectCard";
import { projectCardData } from "@/json/mock/demo.mock";
import { HashLoader } from "react-spinners";

const ProjectsComp = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [color] = useState("#ffffff");
  const handelLoadMore = () => {
    setLoadMore(true);
  };

  return (
    <ProjectsCompStyle className="cmnGap">
      <Container fixed>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h2">My Projects Highlight </Typography>
          <Button endIcon={<RightArrowIcon />} className="outlinedPrimary">
            Explore More
          </Button>
        </Box>

        <Box className="projects">
          <Grid2 container columnSpacing={3} rowSpacing={5}>
            {projectCardData.map((data, index) => (
              <Grid2 size={{ md: 6, xs: 12 }} key={index}>
                <ProjectCard
                  image={data.image}
                  link={data.link}
                  projectTitle={data.projectTitle}
                />
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
    </ProjectsCompStyle>
  );
};

export default ProjectsComp;
