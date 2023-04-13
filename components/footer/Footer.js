import styles from "../../styles/Footer.module.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__text_box}>
        <a href="https://github.com/MatiasCordich" target="__blank">Matias Sio Cordich</a>
        <p>{year}</p>
      </div>
    </footer>
  );
};

export default Footer;
