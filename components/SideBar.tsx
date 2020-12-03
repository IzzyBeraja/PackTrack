import { Drawer } from "@material-ui/core";
import { SvgIconComponent } from "@material-ui/icons";
import MaterialIconButton from "./common/MaterialIconButton";

import styles from "./SideBar.module.scss";

export type SideBarItem = {
  key: string;
  icon: SvgIconComponent;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type Props = {
  className?: string;
  isOpen: boolean;
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  style: "compressed" | "expanded";
  sideBarItemList: SideBarItem[];
};

const SideBar = ({
  className,
  isOpen,
  onClose,
  sideBarItemList,
  style,
}: Props) => {
  return (
    <Drawer className={className} anchor="left" open={isOpen} onClose={onClose}>
      {sideBarItemList.map(({ key, icon, label, onClick }) => (
        <MaterialIconButton
          key={key}
          icon={icon}
          label={label}
          style={style}
          onClick={onClick}
        />
      ))}
    </Drawer>
  );
};

export default SideBar;
