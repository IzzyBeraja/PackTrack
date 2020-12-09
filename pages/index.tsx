import Head from "next/head";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Packages from "../components/Packages";

import { useState } from "react";

import styles from "../styles/Home.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { packages } from "../services/FakePackagesService";

export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const username = "Izzy Beraja";

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        className={styles.nav}
        onOpenMenu={() => setSideBarOpen(!sideBarOpen)}
        username={username}
      />
      <SideBar
        className={styles.sidebar}
        style={sideBarOpen ? "expanded" : "collapsed"}
      />
      <Packages className={styles.main} packages={packages} />
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
