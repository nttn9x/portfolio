"use client";

import { useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";

import styles from "./main.module.scss";

import Banner from "./banner.component";
import Menu from "./menu.component";
import About from "./about.component";
import Project from "./project.component";
import Experience from "./experience.component";

export default function Home() {
  const mask = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root || !root.current) {
      return;
    }

    const nodes = root.current.querySelectorAll(".content");
    if (nodes) {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener("mousemove", function () {
          if (mask && mask.current) {
            mask.current.style.setProperty("--size", "300px");
          }
        });
        nodes[i].addEventListener("mouseout", function () {
          if (mask && mask.current) {
            mask.current.style.setProperty("--size", "30px");
          }
        });
      }
    }

    document.addEventListener("mousemove", (e: MouseEvent) => {
      if (mask && mask.current) {
        const x = e.pageX;
        const y = e.pageY;
        console.log(x, y);
        gsap.to(mask.current, {
          "--x": `${x}px`,
          "--y": `${y}px`,
          duration: 0.3,
          ease: "sine.out",
        });
      }
    });

    return () => {};
  }, [mask, root]);

  return (
    <>
      <main className="relative">
        <Menu />
        <div ref={root} className="layer z-0 flex flex-col items-center">
          <Banner />
          <div className="container px-20 lg:px-44">
            <About />
            <Experience />
            <Project />
          </div>
        </div>
        <div
          ref={mask}
          className={clsx(
            "absolute z-10 top-0 left-0 right-0 flex flex-col items-center pointer-events-none",
            styles.mask
          )}
        >
          <Banner mask />
          <div className="container px-20 lg:px-44">
            <About />
            <Experience />
            <Project />
          </div>
        </div>
      </main>
    </>
  );
}
