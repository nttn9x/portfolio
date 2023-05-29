import styles from "./banner.module.scss";
import clsx from "clsx";

import BgImage from "@me/assets/bg.png";

import Image from "next/image";

interface IBannerInfo {
  mask?: boolean;
}
function BannerInfo({ mask }: IBannerInfo) {
  return (
    <div className="flex-auto lg:w-64 xl:w-72 flex flex-col gap-3 justify-center content">
      <div className="text-base">
        <span className="text-secondary opacity-50">Hi, I'm </span>
        <span className={`text-secondary`}>Nguyen</span>
      </div>

      <div className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-secondary">
        {mask ? (
          <>
            BUILD<div className={"mx-1 text-black"}>SHIT</div>FOR YOU
          </>
        ) : (
          <>
            BUILD<div className={"mx-1 text-primary"}>WHATEVER</div>YOU WANT
          </>
        )}
      </div>
    </div>
  );
}

interface IBannerAvatar {
  mask?: boolean;
}

function BannerAvatar({ mask }: IBannerAvatar) {
  return (
    <div className="flex-auto w-auto md:w-28 flex justify-center relative">
      {!mask && (
        <Image fill src={BgImage} alt="BG" className="object-contain z-10" />
      )}
    </div>
  );
}

interface IBanner {
  mask?: boolean;
}

export default function Banner({ mask }: IBanner) {
  return (
    <div
      id="about"
      className={clsx(
        "w-full px-20 lg:px-44 flex min-h-screen flex-col items-center justify-center",
        { "bg-stone-900": !mask }
      )}
    >
      <div
        className={`flex flex-col md:flex-row gap-6 w-full h-full ${styles.banner}`}
      >
        <BannerInfo mask={mask} />
        <BannerAvatar mask={mask} />
      </div>
    </div>
  );
}
