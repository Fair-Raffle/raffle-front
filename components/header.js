import styles from "@/styles/components/Header.module.css";

const Header = (props) => {
  const { title, texts } = props;
  return (
    <div className={styles.body}>
      <h1 className={styles.title}> {title} </h1>
      <div className={styles.subtitles}>
        {texts.map((text, index) => {
          return (
            <p className={styles.subtitle} key={index}>
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
