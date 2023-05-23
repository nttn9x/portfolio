import Avatar from "@me/styles/img/avatar.jpg";

import Image from "next/image";

import styles from "./banner.module.scss";

function BannerInfo() {
  return (
    <div className="flex-auto w-72 flex flex-col gap-3 justify-center">
      <div className="text-6xl font-black">
        <span className="text-gray-600">Hi, I'm</span>
      </div>
      <span
        className={`text-6xl md:text-7xl lg:text-8xl font-black text-violet-600 ${styles["animate-character"]}`}
      >
        Nguyen
      </span>
      <div
        className={`text-xl font-medium text-primary ${styles.position}`}
      ></div>
      <div className="text-secondary">
        I build web/mobile/desktop application
      </div>
    </div>
  );
}

function BannerAvatar() {
  return (
    <div className="flex-auto w-auto md:w-28 flex justify-center">
      <Image
        src={Avatar}
        className="object-contain"
        alt="Picture of the author"
      />
    </div>
  );
}

export default function Banner() {
  return (
    <div className="flex min-h-screen mb-80 md:mb-40 flex-col items-center justify-center">
      <div
        className={`flex flex-col md:flex-row gap-6 w-full h-full ${styles.banner}`}
      >
        <BannerInfo />
        <BannerAvatar />
      </div>
      <div className="flex mt-36 justify-center rotate-90">What I Do?</div>
    </div>
  );
}
