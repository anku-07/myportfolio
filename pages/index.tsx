import { Rubik, Syne } from "next/font/google";
import Wrapper from "@/layout/Wrapper/Wrapper";
import { Box, Typography } from "@mui/material";

export const rubik = Rubik({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const syne = Syne({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <Wrapper>
      <Box>
        <Typography variant="body1">hello</Typography>
      </Box>
    </Wrapper>
  );
}
