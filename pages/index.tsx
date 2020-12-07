import Head from "next/head";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";

import { Filter, Home as HomeIcon, Search } from "@material-ui/icons";

import { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import SideBar from "../components/SideBar";

export default function Home() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [sideBarStyle, setSideBarStyle] = useState<"collapsed" | "expanded">(
    "collapsed"
  );

  const username = "Izzy Beraja";

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        className={styles.nav}
        onOpenMenu={() => setIsSideBarOpen(true)}
        username={username}
      />
      <SideBar className={styles.sidebar} />
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
