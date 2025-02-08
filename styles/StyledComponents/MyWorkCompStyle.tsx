import { primaryColors } from "@/mui-theme/_muiPalette";
import { syne } from "@/pages";
import { Box, styled } from "@mui/material";

export const MyWorkCompStyle = styled(Box)`
  padding: 80px 0 100px;

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
    }
  }
`;
