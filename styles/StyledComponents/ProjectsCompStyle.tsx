import { primaryColors } from "@/mui-theme/_muiPalette";
import { rubik, syne } from "@/pages";
import { Box, styled } from "@mui/material";

export const ProjectsCompStyle = styled(Box)`
  h2 {
    font-size: 56px;
    font-weight: 700;
    font-family: ${syne.style.fontFamily};
    color: ${primaryColors.white};
    /* text-align: center; */
    margin-bottom: 20px;
    @media (min-width: 1600px) {
      font-size: 3.6vw;
    }
    @media (max-width: 1439px) {
      font-size: 46px;
    }
    @media (max-width: 1199px) {
      font-size: 36px;
    }
    @media (max-width: 899px) {
      font-size: 30px;
    }
  }

  .projects {
    margin-top: 80px;

    @media (max-width: 1199px) {
      margin-top: 40px;
    }
  }

  .outlinedPrimary {
    min-width: auto;
    padding: 22px 45px;
    border: 1px solid ${primaryColors.primary};
    border-radius: 50px;
    font-size: 13px;
    font-weight: 700;
    color: ${primaryColors.white};
    font-family: ${rubik.style.fontFamily};
    transition: all 0.3s ease;
    &:hover {
      background: ${primaryColors.primary};
      padding-right: 60px;
    }

    svg {
      @media (max-width: 899px) {
        width: 15px;
      }
    }

    @media (max-width: 1199px) {
      padding: 14px 25px;
    }
    @media (max-width: 899px) {
      padding: 10px 15px;
    }
  }

  .loading_blk {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    @media (max-width: 599px) {
      margin-top: 20px;
    }
    button {
      min-width: auto;
      padding: 0;
      color: ${primaryColors.white};
      font-family: ${syne.style.fontFamily};
      font-weight: 700;
      text-transform: capitalize;
      font-size: 20px;
      &:hover {
        background: transparent;
      }

      @media (max-width: 1199px) {
        font-size: 18px;
      }
      @media (max-width: 899px) {
        font-size: 15px;
      }
      @media (max-width: 599px) {
        font-size: 12px;
      }
    }
  }
`;
