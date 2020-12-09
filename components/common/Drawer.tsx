import { SvgIconComponent, WebAsset } from "@material-ui/icons";
import MaterialIconButton from "./MaterialIconButton";

import styles from "./Drawer.module.scss";

export type DrawerItem = {
  key: string;
  label: string;
  icon?: SvgIconComponent;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type Props = {
  style: "expanded" | "collapsed";
  items: DrawerItem[];
  className?: string;
};

const Drawer = ({ style, items, className }: Props) => {
  const buttonStyles =
    style === "expanded" ? styles.expandedButton : styles.collapsedButton;
  return (
    <div className={className ?? ""}>
      {items.map(({ key, label, icon, onClick }) => (
        <MaterialIconButton
          key={key}
          className={buttonStyles}
          icon={icon || WebAsset}
          label={label}
          onClick={onClick}
          style={style}
        />
      ))}
    </div>
  );
};

export default Drawer;
