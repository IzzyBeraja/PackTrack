import { Button, SvgIcon, Typography } from "@material-ui/core";
import { SvgIconComponent } from "@material-ui/icons";

import styles from "./MaterialIconButton.module.scss";

type Props = {
  icon: SvgIconComponent;
  label: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: "compressed" | "expanded";
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
  return (
    <Button
      style={{ outline: "none" }}
      className={`${className ?? ""} ${styles.button}`}
      type={type ?? "button"}
      onClick={onClick}
    >
      <SvgIcon
        className={style !== "expanded" ? styles.iconOnly : ""}
        component={icon}
      />

      {style === "expanded" && (
        <Typography variant="button" className={styles.text}>
          {label}
        </Typography>
      )}
    </Button>
  );
};

export default MaterialIconButton;
