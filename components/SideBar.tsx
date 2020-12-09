import Drawer, { DrawerItem } from "./common/Drawer";
import { Home, Search } from "@material-ui/icons";

import styles from "./SideBar.module.scss";

type Props = {
  className?: string;
  style?: "collapsed" | "expanded";
};

const SideBar = ({ className, style }: Props) => {
  const sideBarItems: DrawerItem[] = [
    {
      key: "1",
      label: "Home",
      icon: Home,
      onClick: () => {},
    },
    {
      key: "2",
      label: "Search",
      icon: Search,
      onClick: () => {},
    },
  ];

  return (
    <Drawer
      className={styles.container}
      items={sideBarItems}
      style={style ?? "expanded"}
    />
  );
};

export default SideBar;
