"use client"
import styles from './page.module.css'
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiAngular, SiRedux, SiStyledcomponents, SiBootstrap} from 'react-icons/si'
import { motion } from 'framer-motion'


const page = () => {
  return (
    <main className={styles.skills_box}>
      <h2>
        FrontEnd
      </h2>
      <motion.ul 
        className={styles.skills_icons}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        >
        <li className={styles.icons} >
          <SiHtml5 size="8rem"/>
          <p>Html5</p>
        </li>
        <li className={styles.icons}>
          <SiCss3 size="8rem"/>
          <p>CSS3</p>
        </li>
        <li className={styles.icons}>
          <SiJavascript size="8rem"/>
          <p>JavaScript</p>
        </li>
        <li className={styles.icons}>
          <SiTypescript size="8rem"/>
          <p>TypeScript</p>
        </li>
      </motion.ul>
      <motion.ul 
      className={styles.skills_icons}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.9 }}
      >
        <li className={styles.icons}>
          <SiReact size="8rem"/>
          <p>React</p>
        </li>
        <li className={styles.icons}>
          <SiNextdotjs size="8rem"/>
          <p>Next.js</p>
        </li>
        <li className={styles.icons}>
          <SiAngular size="8rem"/>
          <p>Angular</p>
        </li>
        <li className={styles.icons}>
          <SiRedux size="8rem"/>
          <p>Redux</p>
        </li>
        <li className={styles.icons}>
          <SiBootstrap size="8rem"/>
          <p>Bootsrap</p>
        </li>
        <li className={styles.icons}>
          <SiStyledcomponents size="8rem"/>
          <p>Styled-Components</p>
        </li>
      </motion.ul>
    </main>
  )
}

export default page