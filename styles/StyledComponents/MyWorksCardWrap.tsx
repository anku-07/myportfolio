import { primaryColors } from "@/mui-theme/_muiPalette";
import { inter } from "@/pages";
import { Box, styled } from "@mui/material";

export const MyWorksCardWrap = styled(Box)`
  figure {
    line-height: 0;
    border-radius: 16px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
  a {
    text-decoration: none;
  }

  .work_details {
    text-align: center;
    margin-top: 20px;

    p {
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 700;
      font-family: ${inter.style.fontFamily};
      color: ${primaryColors.colorF4F7FA};
    }
    h2 {
      font-size: 24px;
      font-weight: 700;
      font-family: ${inter.style.fontFamily};
      color: ${primaryColors.white};
    }
  }
`;
