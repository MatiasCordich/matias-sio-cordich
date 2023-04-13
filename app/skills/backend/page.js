"use client"
import {SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiNestjs, SiMysql} from 'react-icons/si'
import { motion } from 'framer-motion'
import styles from '../frontend/page.module.css'

const page = () => {
  return (
    <main className={styles.skills_box}>
      <h2>
        Backend
      </h2>
      <motion.ul 
        className={styles.skills_icons}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        >
        <li className={styles.icons} >
          <SiNodedotjs size="8rem"/>
          <p>Node.js</p>
        </li>
        <li className={styles.icons}>
          <SiExpress size="8rem"/>
          <p>Express</p>
        </li>
        <li className={styles.icons}>
          <SiMongodb size="8rem"/>
          <p>MongoDB</p>
        </li>
        <li className={styles.icons}>
          <SiFirebase size="8rem"/>
          <p>Firebase</p>
        </li>
        <li className={styles.icons}>
          <SiNestjs size="8rem"/>
          <p>Nest.js</p>
        </li>
        <li className={styles.icons}>
          <SiMysql size="8rem"/>
          <p>MySQL</p>
        </li>
      </motion.ul>
      
    </main>
  )
}

export default page