import { primaryColors } from "@/mui-theme/_muiPalette";
import { syne } from "@/pages";
import { Box, styled } from "@mui/material";

export const ContactInfoWrap = styled(Box)`
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

  .contact_blk {
    max-width: 1000px;
    margin: 40px auto;
  }

  p,
  a {
    font-size: 24px;
    font-family: ${syne.style.fontFamily};
    font-weight: 700;
    color: ${primaryColors.white};
  }
  a {
    transition: all 0.3s ease;

    &:hover {
      color: ${primaryColors.primary};
    }
  }

  .phone {
    text-decoration: none;
  }
`;
