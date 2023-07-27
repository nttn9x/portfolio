import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface IProps {
  children: React.ReactNode;
}

interface IHomeContext {
  root?: React.RefObject<HTMLDivElement>;
  mask?: React.RefObject<HTMLDivElement>;
  smoother?: any;
}

export const HomeContext = createContext<IHomeContext>({});

const Home = ({ children }: IProps) => {
  const mask = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    if (!mask?.current || !root?.current) {
      return;
    }

    const ctx = gsap.context((self: any) => {
      const nodes = root.current?.querySelectorAll(".content");
      if (nodes) {
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].addEventListener("mousemove", function () {
            gsap.to(mask.current, {
              "--size": "300px",
              duration: 1,
              ease: "sine.out",
            });
          });
          nodes[i].addEventListener("mouseout", function () {
            gsap.to(mask.current, {
              "--size": "30px",
              duration: 1,
              ease: "sine.out",
            });
          });
        }
      }

      document.addEventListener("mousemove", (e: MouseEvent) => {
        const x = e.pageX;
        const y = e.pageY;

        gsap.to(mask.current, {
          "--x": `${x}px`,
          "--y": `${y}px`,
          duration: 0.3,
          ease: "sine.out",
        });

        mask.current?.setAttribute("data-y", String(y));
      });

      document.addEventListener("scroll", () => {
        const top = document.documentElement.scrollTop;
        let lastScrolledTop: any = parseInt(
          mask.current?.getAttribute("data-l") || "0"
        );
        let y: any = parseInt(mask.current?.getAttribute("data-y") || "0");

        if (lastScrolledTop != top) {
          y -= lastScrolledTop;
          lastScrolledTop = top;
          y += lastScrolledTop;
        }

        gsap.to(mask.current, {
          "--y": `${y}px`,
          "--l": `lastScrolledTop`,
          duration: 0.6,
        });
        mask.current?.setAttribute("data-l", lastScrolledTop);
        mask.current?.setAttribute("data-y", y);
      });

      smoother.current = ScrollSmoother.create({
        smooth: 1, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });

      const boxes = self.selector(".heading-mask");
      boxes.forEach((box: any) => {
        gsap.from(box, {
          "--xPercent": "100%",

          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 0%",
            scrub: true,
          },
        });
      });
    }, root); // <- Scope!

    return () => ctx.revert(); // <- Cleanup!
  }, [root?.current, mask?.current, smoother]);

  return (
    <HomeContext.Provider value={{ mask, root, smoother }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext<IHomeContext>(HomeContext);

export default Home;
