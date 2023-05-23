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
        className={`text-8xl font-black text-violet-600 ${styles["animate-character"]}`}
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
    <div className="flex-auto w-28 flex justify-center">
      <Image
        src={Avatar}
        contain
        className="object-contain"
        alt="Picture of the author"
      />
    </div>
  );
}

export default function Banner() {
  return (
    <div className="flex min-h-screen mb-36 flex-col items-center justify-center">
      <div className={`flex flex-row gap-6 w-full h-full ${styles.banner}`}>
        <BannerInfo />
        <BannerAvatar />
      </div>
      <div className="flex mt-36 justify-center rotate-90">What I Do?</div>
    </div>
  );
}
