import { useLayoutEffect, useState } from "react";

// Restrict value to be between the range [0, value]
const clamp = (value: number) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState<string>("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};

export default function Menu() {
  const activeId = useScrollspy(["about", "experience", "projects"], 400);
  return (
    <div className="z-50 fixed top-0 w-full flex flex-row items-center justify-end px-20 gap-6 h-14 hidden md:flex">
      <a
        href="#about"
        className={
          "about" === activeId || !activeId
            ? "text-primary font-medium"
            : "text-secondary  opacity-50"
        }
      >
        About
      </a>
      <a
        href="#experience"
        className={
          "experience" === activeId
            ? "text-primary font-medium"
            : "text-secondary  opacity-50"
        }
      >
        Experience
      </a>
      <a
        href="#projects"
        className={
          "projects" === activeId
            ? "text-primary font-medium"
            : "text-secondary opacity-50"
        }
      >
        Projects
      </a>
    </div>
  );
}
