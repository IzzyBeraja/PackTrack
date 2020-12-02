import styles from "./NavBar.module.scss";

type Props = {
  className?: React.ReactNode;
};

const NavBar = ({ className }: Props) => {
  return (
    <nav className={`${className ?? ""} navbar ${styles.container}`}>
      <a className={`navbar-brand ${styles.brand}`} href="#">
        PackTrack
      </a>
    </nav>
  );
};

export default NavBar;
