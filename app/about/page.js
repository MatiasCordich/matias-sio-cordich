"use client"
import styles from './page.module.css'
import { motion } from 'framer-motion'

const about = () => {

  return (
    <section className={styles.container}>
      <motion.div 
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 10, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={styles.image_box}>
        <img  
          src="/files/matias.png"
          loading='lazy'
          alt='matias-photo' 
          className={styles.image}/>
      </motion.div>
      <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ duration: 0.6, delay: 1 }} 
      className={styles.text_box}>
        <motion.h2
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        >Sobre mi
        </motion.h2>
        <p>
          Vivo en la Ciudad de Buenos Aires, <span>Argentina</span>, tengo 26 años.
        </p>
        <p>
        Soy desarollador Full Stack (especializado en el stack MERN) orientado al <span>FrontEnd</span>.
        </p>
        <p>
        Mis primeros pasos en el mundo de la programación los dí a comienzos del 2021 cuando, finalmente, decidí aventurarme en el mundo del desarollo web y así, poder encontrar un ecosistema que una mis dos pasiones, el <span>diseño</span> y la <span>computación</span>.
        </p>
        <p>
        Espero conseguir un puesto laboral donde pueda emplear mis conocimientos actuales y tener la oportunidad de seguir ampliándolos.
        </p>

      </motion.div>
    </section>
  )
}

export default about