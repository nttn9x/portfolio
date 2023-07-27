import BgImage from "@me/assets/bg.png";
import Image from "next/image";

interface IBannerAvatar {
  mask?: boolean;
}

export default function BannerAvatar({ mask }: IBannerAvatar) {
  return (
    <div className="flex-auto w-auto md:w-28 flex justify-center relative">
      {!mask && (
        <Image fill src={BgImage} alt="BG" className="object-contain z-10" />
      )}
    </div>
  );
}
