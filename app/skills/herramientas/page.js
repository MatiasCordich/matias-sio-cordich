"use client"
import {SiGit, SiGithub, SiVercel, SiPostman, SiNpm, SiPrisma, SiVisualstudiocode} from 'react-icons/si'
import { motion } from 'framer-motion'
import styles from '../frontend/page.module.css'

const page = () => {
  return (
    <main className={styles.skills_box}>
      <h2>
        Herramientas
      </h2>
      <motion.ul 
        className={styles.skills_icons}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        >
        <li className={styles.icons} >
          <SiGit size="8rem"/>
          <p>Git</p>
        </li>
        <li className={styles.icons}>
          <SiGithub size="8rem"/>
          <p>Github</p>
        </li>
        <li className={styles.icons}>
          <SiVercel size="8rem"/>
          <p>Vercel</p>
        </li>
        <li className={styles.icons}>
          <SiPostman size="8rem"/>
          <p>Postman</p>
        </li>
        <li className={styles.icons}>
          <SiNpm size="8rem"/>
          <p>NPM</p>
        </li>
        <li className={styles.icons}>
          <SiPrisma size="8rem"/>
          <p>Prisma</p>
        </li>
        <li className={styles.icons}>
          <SiVisualstudiocode size="8rem"/>
          <p>VS Code</p>
        </li>
      </motion.ul>
      
    </main>
  )
}
export default page