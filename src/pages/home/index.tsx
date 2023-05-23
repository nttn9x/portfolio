import Banner from "./banner.component";

import Menu from "./menu.component";
import About from "./about.component";
import Project from "./project.component";
import Experience from "./experience.component";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Menu />
      <div className="container mx-lg px-20">
        <Banner />
        <About />
        <Experience />
        <Project />
      </div>
    </main>
  );
}