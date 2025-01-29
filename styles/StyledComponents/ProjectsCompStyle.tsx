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
  }

  .project_blk {
    margin-top: 80px;
    a {
      figure {
        line-height: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
        }
      }
    }
  }
`;
