import { Rubik, Syne } from "next/font/google";
import Wrapper from "@/layout/Wrapper/Wrapper";
import { Box, Typography, Container } from "@mui/material";

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
      <Container fixed>
        <Box>
          <Typography variant="h1">
            End-to-End Development, Seamless Results fff
          </Typography>
        </Box>
      </Container>
    </Wrapper>
  );
}
