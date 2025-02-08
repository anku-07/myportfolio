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
  }

  p {
    color: ${primaryColors.color949494};
    font-family: ${rubik.style.fontFamily};
    font-size: 18px;
    font-family: 500;
  }
`;
