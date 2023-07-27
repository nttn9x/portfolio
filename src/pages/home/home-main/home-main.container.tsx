import clsx from "clsx";

import styles from "./home-main.module.scss";

import Banner from "../home-banner/home-banner.component";
import About from "../home-about/home-about.component";
import Experience from "../home-experience/home-experience.component";
import Menu from "../menu.component";
import Project from "../project.component";
import { useHomeContext } from "../home.context";

import Footer from "@me/app/footer";

export default function Home() {
  const { mask, root } = useHomeContext();

  return (
    <>
      <main className="relative">
        <Menu />
        <div ref={root} className="layer z-0 flex flex-col">
          <Banner />
          <About />
          <Experience />
          {/* <Project /> */}
          <Footer />
        </div>

        <div
          ref={mask}
          className={clsx(
            "absolute z-10 top-0 left-0 right-0 flex flex-col pointer-events-none",
            styles.mask
          )}
        >
          <Banner mask />
          <About />
          <Experience />
          {/* <Project /> */}
          <Footer />
        </div>
      </main>
    </>
  );
}
