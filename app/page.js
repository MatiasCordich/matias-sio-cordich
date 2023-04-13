"use client";

import { motion } from "framer-motion";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxCross2,
  RxDividerHorizontal,
  RxBox,
} from "react-icons/rx";
import styles from "./page.module.css";
const page = () => {
  return (
    <main className={styles.container}>
      <section className={styles.text__home}>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Hola.
        </motion.h3>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Me llamo <span>Matias</span>
        </motion.h1>

        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Desarollador <span>Front-End</span>
        </motion.h2>

        <div className={styles.btn__box}>
          <motion.a
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className={styles.btn__1}
          >
            <RxGithubLogo size="2rem" />
            Github
          </motion.a>
          <motion.a
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className={styles.btn__2}
          >
            <RxLinkedinLogo size="2rem" />
            LinkedIn
          </motion.a>
        </div>
      </section>
      <motion.section 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className={styles.code__box}>
        <header className={styles.header__code}>
          <h3>Matias.js</h3>
          <ul className={styles.btns__code}>
            <li>
              <RxDividerHorizontal style={{ color: "#FEFCF3" }} />
            </li>
            <li>
              <RxBox style={{ color: "#FEFCF3" }} />
            </li>
            <li>
              <RxCross2 style={{ color: "#FEFCF3" }} />
            </li>
          </ul>
        </header>
        <div className={styles.code__window}>
          <p className={styles.code__line}>
            <span className={styles.const}>const</span>
            <span className={styles.variable}> matias </span>
            <span>= &#123;</span>
          </p>
          <div className={styles.identation}>
            <p className={styles.code__line}>
              <span className={styles.key}>apellidos:</span>
              <span>&#91;"Sio", "Cordich"&#93;,</span>
            </p>
            <p className={styles.code__line}>
              <span className={styles.key}>trabajo:</span>
              <span> "Front-End developer"</span>,
            </p>
            <p className={styles.code__line}>
              <span className={styles.key}>edad:</span>
              <span> 26</span>,
            </p>
            <p className={styles.code__line}>
              <span className={styles.key}>pais: </span>
              <span>"Argentina"</span>,
            </p>
            <p className={styles.code__line}>
              <span className={styles.key}>lenguajes:</span>
              <span>&#91;"HTML", "CSS", "Javascript","Typescript"&#93;</span>,
            </p>
            <p className={styles.code__line}>
              <span className={styles.key}>skills: </span>
              <span>&#123;</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".6rem",
                marginLeft: "10px",
              }}
            >
              <p style={{ marginLeft: "10px" }} className={styles.code__line}>
                <span className={styles.key}>frontend:</span>
                <span>
                  &#91;"React", "Redux", "Styled-Components","Bootstrap"&#93;
                </span>
                ,
              </p>
              <p style={{ marginLeft: "10px" }} className={styles.code__line}>
                <span className={styles.key}>backend:</span>
                <span>&#91;"Node.js", "Express", "Nest"&#93;</span>,
              </p>
              <p style={{ marginLeft: "10px" }} className={styles.code__line}>
                <span className={styles.key}>database:</span>
                <span>&#91;"MongoDB", "Firebase"&#93;</span>,
              </p>
              <p style={{ marginLeft: "10px" }} className={styles.code__line}>
                <span className={styles.key}>herramientas:</span>
                <span>
                  &#91;"Vercel", "Postman", "Git","Github", "VSCode"&#93;
                </span>
              </p>
              <p className={styles.code__line}>
                <span style={{ marginRight: "10px" }}>&#125;</span>
              </p>
            </div>
          </div>
          <p className={styles.code__line}>
            <span>&#125;</span>
          </p>
        </div>
      </motion.section>
    </main>
  );
};

export default page;
