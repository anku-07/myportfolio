import { primaryColors } from "@/mui-theme/_muiPalette";
import { syne } from "@/pages";
import { Box, styled } from "@mui/material";

export const FooterWrap = styled(Box)`
  background: ${primaryColors.footerbg};

  padding: 100px 0 50px;

  .ftr_top {
    text-align: center;
    p {
      color: ${primaryColors.colorFF9142};
      font-family: ${syne.style.fontFamily};
      font-size: 24px;
      font-weight: 700;
    }
    a {
      font-family: ${syne.style.fontFamily};
      font-size: 64px;
      font-weight: 700;
      color: ${primaryColors.white};
      transition: all 0.3s ease-in-out;
      &:hover {
        color: ${primaryColors.colorFF9142};
      }
    }
  }

  .ftr_middle {
    padding: 200px 0 50px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background: ${primaryColors.color949494};
      left: 0;
      bottom: 0;
    }
    .address_blk {
      p {
        color: ${primaryColors.white};
        font-size: 24px;
        font-weight: 700;
        font-family: ${syne.style.fontFamily};
      }
    }

    .contact_blk {
      a {
        color: ${primaryColors.white};
        font-size: 24px;
        font-weight: 700;
        font-family: ${syne.style.fontFamily};
        text-decoration: none;

        transition: all 0.4s ease;

        &:hover {
          color: ${primaryColors.primary};
        }
      }

      ul {
        display: flex;
        margin-top: 15px;
        li {
          width: auto;
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }
  }

  .copyBlk {
    text-align: center;
    padding-top: 20px;
    p {
      font-size: 24px;
      font-weight: 700;
      color: ${primaryColors.white};
      font-family: ${syne.style.fontFamily};
    }
  }
`;
