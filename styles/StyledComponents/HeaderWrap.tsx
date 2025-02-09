import { primaryColors } from "@/mui-theme/_muiPalette";
import { rubik } from "@/pages";
import { Box, styled } from "@mui/material";

export const HeaderWrap = styled(Box)`
  .headercontainer {
    background-color: transparent;
    box-shadow: none;
    padding: 30px 0;

    @media (max-width: 1199px) {
      padding: 10px 0;
    }
  }
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }

  .headerLogo {
    width: 150px;
    display: inline-block;
  }

  .nav_bar {
    margin-left: auto;
    @media (max-width: 899px) {
      display: none;
    }
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

    @media (max-width: 899px) {
      margin-left: auto;
    }
  }

  .hambar {
    button {
      min-width: auto;
      padding: 0;
    }
    display: none;
    margin-left: 20px;
    @media (max-width: 899px) {
      display: block;
    }
  }
`;
