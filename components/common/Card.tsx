import styles from "./Card.module.scss";

type Props = {
  label: string;
  image: string;
  description: string;
  className?: string;
};

const Card = ({ label, image, description, className }: Props) => {
  return (
    <div className={[styles.container, className ?? ""].join(" ")}>
      <img src={image ?? "/package.png"} alt="Package" height="64" width="64" />
      <div className={styles.title}>{label ?? "Label"}</div>
      <div className={styles.description}>{description ?? "Description"}</div>
    </div>
  );
};

export default Card;
