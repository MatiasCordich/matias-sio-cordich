"use client"
import styles from "./page.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";

const contact = () => {
  return (
    <main className={styles.container}>
      <motion.h2
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.5}}
      >Contacto
      </motion.h2>
      <motion.p
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.5}}
      >
        Si has llegado hasta aquí, te doy las gracias por haber visitado mi
        portfolio.
      </motion.p>
      <motion.div 
      className={styles.links_box}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.6}}
      >
        <p>No dudes en contactarme.</p>
        <a className={styles.links} href="mailto: m.scordich@gmail.com">
          <HiOutlineMail size="2.5rem"/>
          m.scordich@gmail.com
        </a>
      </motion.div>

      <motion.div 
      className={styles.links_box}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.7}}
      >
        <p>
          No te olvides que también puedes contactarme a través de mis redes.
        </p>
        <a className={styles.links} href="https://github.com/MatiasCordich" target="_blank">
          <SiGithub size="2.5rem"/>
          Matias Sio Cordich
        </a>
        <a className={styles.links} href="https://www.linkedin.com/in/matiassiocordich/" target="_blank">
          <SiLinkedin size="2.5rem" />
          Matias Sio Cordich
        </a>
      </motion.div>
    </main>
  );
};

export default contact;
