import { SvgIconComponent, WebAsset } from "@material-ui/icons";
import MaterialIconButton from "./MaterialIconButton";

export type DrawerItem = {
  key: string;
  label: string;
  icon?: SvgIconComponent;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type Props = {
  status: "expanded" | "collapsed";
  items: DrawerItem[];
};

const Drawer = ({ status, items }: Props) => {
  return (
    <div>
      {items.map(({ key, label, icon, onClick }) => (
        <div key={key}>
          <MaterialIconButton
            icon={icon || WebAsset}
            label={label}
            onClick={onClick}
            style={status}
          />
        </div>
      ))}
    </div>
  );
};

export default Drawer;
