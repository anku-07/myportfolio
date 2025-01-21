import { primaryColors } from "@/mui-theme/_muiPalette";
import { rubik } from "@/pages";
import { Box, styled } from "@mui/material";

export const HeaderWrap = styled(Box)`
  .headercontainer {
    background-color: transparent;
    box-shadow: none;
    padding: 30px 0;
  }

  .headerLogo {
    width: 150px;
    display: inline-block;
  }

  .nav_bar {
    margin-left: auto;
    ul {
      display: flex;
      align-items: center;

      li {
        width: auto;
        a {
          text-decoration: none;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
          text-transform: uppercase;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: ${primaryColors.primary};
          }
        }
        &:not(:last-child) {
          margin-right: 40px;
        }
      }
    }
  }

  .hdr_rgt {
    margin-left: 55px;
  }
`;
