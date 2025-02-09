import { primaryColors } from "@/mui-theme/_muiPalette";
import { rubik, syne } from "@/pages";
import { Box, styled } from "@mui/material";

export const CommonHeadWrap = styled(Box)`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 150px;
    left: 0;
    top: 0;
    background: rgba(255, 255, 255, 0.18);
    filter: blur(100px);
    transform: rotate(-178.32deg);
  }
  .headContent {
    padding: 60px 0;
    position: relative;
    @media (max-width: 899px) {
      padding: 40px 0;
    }
    @media (max-width: 599px) {
      padding: 20px 0;
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: ${primaryColors.color949494};
      left: 0;
      bottom: 0;
    }
  }

  h1 {
    font-size: 72px;
    font-weight: 700;
    font-family: ${syne.style.fontFamily};
    color: ${primaryColors.white};
    @media (min-width: 1600px) {
      font-size: 4.6875vw;
    }
    @media (max-width: 1439px) {
      font-size: 60px;
    }
    @media (max-width: 1199px) {
      font-size: 50px;
    }
    @media (max-width: 899px) {
      font-size: 40px;
    }
    @media (max-width: 599px) {
      font-size: 30px;
    }
  }

  p {
    color: ${primaryColors.color949494};
    font-family: ${rubik.style.fontFamily};
    font-size: 18px;
    font-family: 500;

    @media (max-width: 899px) {
      font-size: 16px;
    }
    @media (max-width: 599px) {
      font-size: 14px;
    }
  }
`;
