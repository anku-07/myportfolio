import asset from "@/json/asset";
import { ProjectCardWrap } from "@/styles/StyledComponents/ProjectCardWrap";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface projectCardProps {
  link: string;
  image: string;
  projectTitle: string;
}

const ProjectCard = ({ link, image, projectTitle }: projectCardProps) => {
  return (
    <ProjectCardWrap>
      <Box className="project_blk">
        <Link href={link}>
          <figure>
            <Image src={image} width={560} height={620} alt="project1" />
          </figure>
          <Typography variant="body1">{projectTitle}</Typography>
        </Link>
      </Box>
    </ProjectCardWrap>
  );
};

export default ProjectCard;
