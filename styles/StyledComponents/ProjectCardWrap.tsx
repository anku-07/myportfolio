import { primaryColors } from "@/mui-theme/_muiPalette";
import { syne } from "@/pages";
import { Box, styled } from "@mui/material";

export const ProjectCardWrap = styled(Box)`
  .project_blk {
    a {
      text-decoration: none;
      figure {
        line-height: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
        }
      }

      p {
        font-size: 24px;
        font-family: ${syne.style.fontFamily};
        text-transform: capitalize;
        color: ${primaryColors.white};
        font-weight: 700;
        margin-top: 20px;
        position: relative;
        transition: all 0.3s ease;
        &:hover {
          color: ${primaryColors.colorFF9142};
        }
        &::before {
          content: "";
          position: absolute;
          width: 15%;
          height: 1px;
          background: ${primaryColors.colorFF9142};
          right: 10px;
          top: 20px;
        }
      }
    }
  }
`;
