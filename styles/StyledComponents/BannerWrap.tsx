import { primaryColors } from "@/mui-theme/_muiPalette";
import { syne } from "@/pages";
import { Box, styled } from "@mui/material";

export const BannerWrap = styled(Box)`
  text-align: center;
  padding: 100px 0 40px;
  position: relative;

  @media (max-width: 1199px) {
    padding: 60px 0 40px;
  }
  @media (max-width: 1199px) {
    padding: 40px 0;
  }

  &::before {
    content: "";
    position: absolute;
    right: 20%;
    width: 317.14px;
    height: 173.03px;
    background: rgba(255, 255, 255, 0.18);
    filter: blur(100px);
    transform: rotate(-178.32deg);
    pointer-events: none;
  }
  h1 {
    font-family: ${syne.style.fontFamily};
    font-size: 72px;
    font-weight: 700;
    color: ${primaryColors.white};
    /* width: 100%; */
    /* border-right: 5px solid; */
    /* white-space: nowrap;
    overflow: hidden; */
    /* animation:
      typing 2s,
      cursor 0.4s step-end infinite alternate; */
    @media (min-width: 1600px) {
      font-size: 4.6875vw;
    }
    @media (max-width: 1439px) {
      font-size: 60px;
    }
    @media (max-width: 1199px) {
      font-size: 50px;
    }
    @media (max-width: 899px) {
      font-size: 40px;
    }
    @media (max-width: 599px) {
      font-size: 30px;
    }
  }
  @keyframes cursor {
    50% {
      border-color: transparent;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }
  .btnWrap {
    margin-top: 90px;

    @media (max-width: 1199px) {
      margin-top: 40px;
    }
    @media (max-width: 899px) {
      margin-top: 25px;
    }
  }

  .containedPrimary {
    background: #ff9142;
    font-size: 13px;
    font-family: "Rubik", serif;
    color: #ffffff;
    padding: 21.5px 40px;
    border-radius: 50px;
    border: 1px solid ${primaryColors.primary};
    transition: all 0.4s ease;
    &:hover {
      border: 1px solid ${primaryColors.primary};
      background: transparent;
      padding-right: 60px;
    }
    svg {
      @media (max-width: 899px) {
        width: 15px;
      }
    }
    @media (max-width: 1199px) {
      padding: 14.5px 24px;
    }
    @media (max-width: 899px) {
      padding: 10px 15px;
    }
  }
`;
