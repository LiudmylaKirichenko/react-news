import { formatDateAgo } from "../../helpers/formatTimeAgo";
import styles from "./NewsBanner.module.css";
import BannerImage from "../BannerImage/BannerImage";

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <BannerImage image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.publishedTime}>
        {formatDateAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;
