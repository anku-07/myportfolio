import { Rubik, Syne } from "next/font/google";
import Wrapper from "@/layout/Wrapper/Wrapper";
import Banner from "@/components/Banner/Banner";
import AboutMe from "@/components/AboutMe/AboutMe";
import ProjectsComp from "@/components/ProjectsComp/ProjectsComp";

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
      <Banner />
      <AboutMe />
      <ProjectsComp />
    </Wrapper>
  );
}
