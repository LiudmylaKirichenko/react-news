import styles from "./BannerImage.module.css";

const BannerImage = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
};

export default BannerImage;
