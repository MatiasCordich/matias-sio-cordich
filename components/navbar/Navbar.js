import Link from "next/link";
import {
  RxCross1,
  RxHamburgerMenu,
  RxHome,
  RxPerson,
  RxPencil1,
  RxDesktop,
  RxEnvelopeClosed,
  RxFileText,
} from "react-icons/rx";
import styles from "../../styles/Navbar.module.css";
import { useEffect, useState } from "react";




const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [change, setChange] = useState(false)

  const activeNavbarGlassmorphism = () => {
    if (window.scrollY >=50) {
      setChange(true)
    } else {
      setChange(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', activeNavbarGlassmorphism)
  }, [])
  

  

  return (
    <nav className={`${styles.navbar} ${change ? styles.glassmorphism : ''}`}>
      <div className={styles.navbar__box}>
        <h1>Matias</h1>
        <RxHamburgerMenu
          onClick={() => setNavbarOpen(!navbarOpen)}
          size="4rem"
          style={{ color: "#295939" }}
          className={styles.menu__btns}
        />
      </div>

        <ul
          className={`${styles.navbar__links} ${navbarOpen ? styles.show : ''}`}
        >
          <RxCross1
            style={{ color: "#FEFCF3" }}
            onClick={() => setNavbarOpen(!navbarOpen)}
            size="4rem"
            className={styles.menu__btns}
          />
          <li>
            <Link 
              href="/" 
              onClick={() => setNavbarOpen(!navbarOpen)}
              >
              <RxHome />
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setNavbarOpen(!navbarOpen)}>
              <RxPerson />
              Sobre Mi
            </Link>
          </li>
          <li>
            <Link href="/skills" onClick={() => setNavbarOpen(!navbarOpen)}>
              <RxPencil1 />
              Habilidades
            </Link>
          </li>
          <li>
            <Link href="/proyects" onClick={() => setNavbarOpen(!navbarOpen)}>
              <RxDesktop />
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setNavbarOpen(!navbarOpen)}>
              <RxEnvelopeClosed />
              Contacto
            </Link>
          </li>
          <li className={styles.resume__btn}>
            <a href="/files/CV.pdf" target="_blank">
              <RxFileText />
              Curriculum
            </a>
          </li>
        </ul>

    </nav>
  );
};

export default Navbar;
