import Head from "next/head";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import SideBar from "../components/SideBar";

const username = "Izzy Beraja";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar className={styles.nav} username={username} />
      <SideBar className={styles.sidebar} />
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
