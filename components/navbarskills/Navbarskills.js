import { useState } from "react";
import { BiChevronUp } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../../styles/Navbarskills.module.css";

const Navbarskills = () => {
  const itemVaraiants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const [open, setOpen] = useState(false);

  return (
    <>
    <motion.nav
      className={styles.navbar}
      animate={open ? "open" : "closed"}
      initial={false}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <motion.div
        className={styles.navbar__head}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3>Menu</h3>
        <BiChevronUp
          onClick={() => setOpen(!open)}
          size="3rem"
          style={{ color: "#fefcf3" }}
          className={`${styles.menu__btns} ${
            open ? styles.rotate : styles.invert_rotate
          }`}
        />
      </motion.div>

      <motion.ul
        className={styles.navbar__links}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        <motion.li variants={itemVaraiants} onClick={() => setOpen(!open)}>
          <Link href="/skills/frontend">Frontend</Link>
        </motion.li>
        <motion.li variants={itemVaraiants} onClick={() => setOpen(!open)}>
          <Link href="/skills/backend">Backend</Link>
        </motion.li>
        <motion.li variants={itemVaraiants} onClick={() => setOpen(!open)}>
          <Link href="/skills/herramientas">Herramientas</Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
    </>
    
  );
};

export default Navbarskills;
