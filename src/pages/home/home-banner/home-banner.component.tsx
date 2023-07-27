import BannerAvatar from "./home-banner-avatar.component";
import BannerInfo from "./home-banner-hello.component";
import * as styles from "./home-banner.style";

interface IBanner {
  mask?: boolean;
}

export default function Banner({ mask }: IBanner) {
  return (
    <div id="about" className={styles.getContainerStyle(mask)}>
      <div className={styles.body}>
        <BannerInfo mask={mask} />
        <BannerAvatar mask={mask} />
      </div>
    </div>
  );
}
