"use client"

import styles from './page.module.css'
const proyects = () => {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <img src='https://static.vecteezy.com/system/resources/previews/005/424/886/original/default-avatar-profile-icon-social-media-user-free-vector.jpg'/>
        <div className={styles.card_description}>
          <h2>Title</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <ul>
            <li>
              tech
            </li>
            |
            <li>
              tech
            </li>
            |
            <li>
              tech
            </li>
            |
            <li>
              tech
            </li>
          </ul>
          <div className={styles.card_links}>
            <a className={styles.btn_1}>Repositorio</a>
            <a className={styles.btn_2}>Pagina</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default proyects