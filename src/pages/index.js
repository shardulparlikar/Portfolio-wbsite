import Image from "next/image";
import { Inter } from "next/font/google";
import { HomePage } from "./homePage/HomePage";
import { AboutMe } from "./AboutMe";
import { ExpriancePage } from "./ExpriancePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage />
      {/* <AboutMe /> */}
      <ExpriancePage />
    </>
  );
}
