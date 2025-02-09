import { primaryColors } from "@/mui-theme/_muiPalette";
import { syne } from "@/pages";
import { Box, styled } from "@mui/material";

export const FooterWrap = styled(Box)`
  background: ${primaryColors.footerbg};

  padding: 100px 0 50px;

  @media (max-width: 1439px) {
    padding: 80px 0 50px;
  }
  @media (max-width: 1199px) {
    padding: 60px 0 50px;
  }
  @media (max-width: 899px) {
    padding: 40px 0;
  }

  .ftr_top {
    text-align: center;
    p {
      color: ${primaryColors.colorFF9142};
      font-family: ${syne.style.fontFamily};
      font-size: 24px;
      font-weight: 700;
      @media (max-width: 899px) {
        font-size: 20px;
      }

      @media (max-width: 599px) {
        font-size: 18px;
      }
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

      @media (max-width: 1439px) {
        font-size: 55px;
      }
      @media (max-width: 1199px) {
        font-size: 45px;
      }
      @media (max-width: 899px) {
        font-size: 35px;
      }

      @media (max-width: 599px) {
        font-size: 25px;
      }
    }
  }

  .ftr_middle {
    padding: 200px 0 50px;
    position: relative;

    @media (max-width: 1439px) {
      padding: 150px 0 50px;
    }
    @media (max-width: 1199px) {
      padding: 100px 0 50px;
    }
    @media (max-width: 899px) {
      padding: 50px 0;
    }
    @media (max-width: 599px) {
      padding: 30px 0;
    }

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

        @media (max-width: 899px) {
          font-size: 18px;
        }
        @media (max-width: 599px) {
          font-size: 16px;
        }
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

        @media (max-width: 899px) {
          font-size: 18px;
        }
        @media (max-width: 599px) {
          font-size: 16px;
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

  .footer_logo {
    @media (max-width: 899px) {
      display: inline-block;
      width: 140px;
    }

    @media (max-width: 599px) {
      width: 100px;
    }

    img {
      width: 100%;
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

      @media (max-width: 899px) {
        font-size: 20px;
      }
      @media (max-width: 599px) {
        font-size: 16px;
      }
    }
  }
`;
