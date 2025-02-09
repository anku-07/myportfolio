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

    @media (max-width: 899px) {
      max-width: 100%;
      margin: 20px auto;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  p,
  a {
    font-size: 24px;
    font-family: ${syne.style.fontFamily};
    font-weight: 700;
    color: ${primaryColors.white};

    @media (max-width: 899px) {
      font-size: 20px;
      margin-bottom: 5px;
    }
    @media (max-width: 599px) {
      font-size: 16px;
    }
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
