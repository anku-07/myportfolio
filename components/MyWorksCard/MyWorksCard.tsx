import asset from "@/json/asset";
import { MyWorksCardWrap } from "@/styles/StyledComponents/MyWorksCardWrap";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface myWorkCardProps {
  image: string;
  link: string;
  subTitle: string;
  head: string;
}

const MyWorksCard = ({image,link,subTitle,head}: myWorkCardProps) => {
  return (
    <MyWorksCardWrap>
      <Box className="workCardBlk">
        <Link href={link}>
          <figure>
            <Image
              src={image}
              width={360}
              height={360}
              alt="myworksImg1"
            />
          </figure>
          <Box className="work_details">
            <Typography variant="body1">{subTitle}</Typography>
            <Typography variant="h2">{head}</Typography>
          </Box>
        </Link>
      </Box>
    </MyWorksCardWrap>
  );
};

export default MyWorksCard;
