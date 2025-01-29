import { ProjectsCompStyle } from "@/styles/StyledComponents/ProjectsCompStyle";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid2 } from "@mui/material";
import RightArrowIcon from "@/ui/Icons/RightArrowIcon";
import Link from "next/link";
import Image from "next/image";
import asset from "@/json/asset";

const ProjectsComp = () => {
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

        <Box className="project_blk">
          <Grid2 container columnSpacing={3} rowSpacing={10}>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Link href="">
                <figure>
                  <Image
                    src={asset.project1}
                    width={560}
                    height={620}
                    alt="project1"
                  />
                </figure>
              </Link>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <Link href="">
                <figure>
                  <Image
                    src={asset.project2}
                    width={560}
                    height={620}
                    alt="project1"
                  />
                </figure>
              </Link>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </ProjectsCompStyle>
  );
};

export default ProjectsComp;
