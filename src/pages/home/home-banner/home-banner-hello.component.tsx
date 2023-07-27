import * as styles from "./home-banner.style";

interface IBannerInfo {
  mask?: boolean;
}

export default function BannerInfo({ mask }: IBannerInfo) {
  return (
    <div className={styles.infoContainer}>
      <div className="text-base">
        <span className="text-secondary opacity-50">
          {mask ? "Hey" : "Hi"}, I'm{" "}
        </span>
        <span className={`text-secondary`}>Nguyen</span>
      </div>

      {mask && (
        <div className={styles.infoContentHover}>
          BUILD<div className={"mx-1 text-white"}>SHIT</div>FOR YOU
        </div>
      )}

      {!mask && (
        <div className={styles.infoContent}>
          BUILD<div className={"mx-1 text-primary"}>WHATEVER</div>YOU WANT
        </div>
      )}
    </div>
  );
}
