import { primaryColors } from "@/mui-theme/_muiPalette";
import { rubik, syne } from "@/pages";
import { Box, styled } from "@mui/material";

export const ContactFromWrap = styled(Box)`
  h2 {
    font-size: 64px;
    font-weight: 700;
    font-family: ${syne.style.fontFamily};
    color: ${primaryColors.white};

    @media (max-width: 1439px) {
      font-size: 56px;
    }
    @media (max-width: 1199px) {
      font-size: 46px;
    }
    @media (max-width: 899px) {
      font-size: 36px;
    }
    @media (max-width: 599px) {
      font-size: 25px;
    }
  }
  .each_input_blk {
    .label {
      font-size: 24px;
      font-weight: 500;
      font-family: ${rubik.style.fontFamily};
      text-transform: uppercase;
      color: ${primaryColors.white};
      line-height: 1;

      @media (max-width: 899px) {
        font-size: 20px;
      }
      @media (max-width: 599px) {
        font-size: 18px;
      }
    }
  }

  .sendBtn {
    background: ${primaryColors.primary};

    border: 1px solid ${primaryColors.primary};
    color: ${primaryColors.white};
    font-family: ${rubik.style.fontFamily};
    font-size: 24px;
    font-weight: 500;
    border-radius: 50px;
    padding: 5px 40px;
    transition: all 0.3s ease;
    &:hover {
      border: 1px solid ${primaryColors.primary};
      background: transparent;

      color: ${primaryColors.primary};
    }

    @media (max-width: 899px) {
      padding: 5px 30px;
      font-size: 20px;
    }
    @media (max-width: 599px) {
      padding: 5px 20px;
      font-size: 18px;
    }
  }
`;
