import { primaryColors } from "@/mui-theme/_muiPalette";
import { rubik, syne } from "@/pages";
import { Box, styled } from "@mui/material";

export const ProjectsCompStyle = styled(Box)`
  h2 {
    font-size: 3.6vw;
    font-weight: 700;
    font-family: ${syne.style.fontFamily};
    color: ${primaryColors.white};
    /* text-align: center; */
    margin-bottom: 20px;
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

    @media (max-width: 1199px) {
      padding: 14px 25px;
    }
  }

  .loading_blk {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

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
    }
  }
`;
