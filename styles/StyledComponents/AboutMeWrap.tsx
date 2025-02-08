import { primaryColors } from "@/mui-theme/_muiPalette";
import { rubik, syne } from "@/pages";
import { Box, styled } from "@mui/material";

export const AboutMeWrap = styled(Box)`
  .myDetails {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 317.14px;
      height: 173.03px;
      background: rgba(255, 255, 255, 0.18);
      filter: blur(100px);
      transform: rotate(-178.32deg);
      left: -80px;
      top: -40px;
    }
    h2 {
      font-size: 3.6vw;
      font-weight: 700;
      font-family: ${syne.style.fontFamily};
      color: ${primaryColors.white};
    }
    p {
      font-size: 18px;
      font-weight: 400;
      font-family: ${rubik.style.fontFamily};
      color: ${primaryColors.colorA8A8A8};
      margin: 20px 0 40px;
    }
  }

  figure {
    line-height: 0;
    max-width: 450px;
    height: auto;

    /* overflow: hidden; */
    margin: 0 auto;
    position: relative;
    .topImg {
      position: absolute;
      right: 0;
      top: -20px;
    }
    .leftImg {
      position: absolute;
      bottom: 50px;
      left: -25px;
    }
    .myImg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 30px;
    }
  }

  .containedPrimary {
    background: #ff9142;
    font-size: 13px;
    font-family: "Rubik", serif;
    color: #ffffff;
    padding: 21.5px 40px;
    border-radius: 50px;
    border: 1px solid ${primaryColors.primary};
    transition: all 0.4s ease;
    text-transform: capitalize;
    &:hover {
      border: 1px solid ${primaryColors.primary};
      background: transparent;
      padding-right: 60px;
    }
  }
`;
