import { Button, SvgIcon, Typography } from "@material-ui/core";
import { SvgIconComponent } from "@material-ui/icons";

import styles from "./MaterialIconButton.module.scss";

type Props = {
  icon: SvgIconComponent;
  label: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: "collapsed" | "expanded";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const MaterialIconButton = ({
  icon,
  label,
  className,
  type,
  style,
  onClick,
}: Props) => {
  const exp = style === "expanded";
  return (
    <Button
      style={{ outline: "none" }}
      className={[className ?? "", styles.button].join(" ")}
      type={type ?? "button"}
      onClick={onClick}
    >
      <SvgIcon className={exp && styles.svgIcon} component={icon} />
      {exp && (
        <Typography variant="button" className={styles.text}>
          {label}
        </Typography>
      )}
    </Button>
  );
};

export default MaterialIconButton;
