"use client";
import styles from "./page.module.css";
import { motion } from "framer-motion";

const skills = () => {
  return (
    <motion.section 
      className={styles.container_2}
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 10, opacity: 0 }}
      transition={{ duration: 0.6, delay: 1 }}>
      <h2>Habilidades</h2>
      <div className={styles.text_box}>
        <p>Actualmente me especializo en el stack <span>MERN</span>.</p>
        <p>En el <span>menu</span> puedes ver las tecnologías que he estado usando últimamente en mis proyectos.</p>
      </div> 
    </motion.section>
  );
};

export default skills;
