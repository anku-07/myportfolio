import { primaryColors } from "@/mui-theme/_muiPalette";
import { syne } from "@/pages";
import { Drawer, styled } from "@mui/material";

export const HeaderDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 250px;
    background: rgb(26, 26, 26);
    padding: 20px;
  }

  .crossBar {
    position: absolute;
    padding: 0;
    min-width: auto;
    left: 10px;
    top: 10px;
  }

  .drawerLogo {
    text-align: center;
  }

  .drawerList {
    margin-top: 20px;
    li {
      :not(:last-child) {
        margin-bottom: 20px;
      }
      a {
        text-decoration: none;
        font-size: 14px;
        text-transform: uppercase;
        color: ${primaryColors.white};
        font-family: ${syne.style.fontFamily};
        font-weight: 700;
      }
    }
  }
`;
