import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import styles from "./NavBar.module.scss";

type Props = {
  className?: string;
  onOpenMenu: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  username: string;
};

const NavBar = ({ className, username, onOpenMenu }: Props) => {
  return (
    <AppBar
      position="relative"
      className={`${className ?? ""} ${styles.appBar}`}
    >
      <Toolbar className={styles.toolbar}>
        <IconButton
          className={styles.button}
          edge="start"
          color="inherit"
          aria-label="menu"
          type="button"
          onClick={onOpenMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={styles.brand}>PackTrack</Typography>
        <IconButton className={styles.button} color="inherit" aria-label="menu">
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    //
    //   <a className={`navbar-brand ${styles.brand}`} href="#">
    //     PackTrack
    //   </a>
    //   <div className={styles.menuItems}>
    //     <a href="#">{username}</a>
    //     <a href="#">
    //       <i className="fas fa-bell"></i>
    //     </a>
    //   </div>
    // </nav>
  );
};

export default NavBar;
