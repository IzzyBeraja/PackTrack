import { IconButton, SvgIcon } from "@material-ui/core";
import { SvgIconComponent } from "@material-ui/icons";

type Props = {
  icon: SvgIconComponent;
};

const MaterialIconButton = ({ icon }: Props) => {
  return (
    <IconButton style={{ outline: "none" }}>
      <SvgIcon component={icon} />
    </IconButton>
  );
};

export default MaterialIconButton;
