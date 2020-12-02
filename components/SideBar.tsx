import styles from "./SideBar.module.scss";

type Props = {
  className?: React.ReactNode;
};

const SideBar = ({ className }: Props) => {
  return (
    <div className={`${className ?? ""} ${styles.container}`}>
      <div className={styles.top}>
        <div>
          <i className={`fas fa-home ${styles.icon}`} />
        </div>
        <div>
          <i className={`fas fa-search ${styles.icon}`} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <i className={`fas fa-cog ${styles.icon}`} />
        </div>
        <div>
          <i className={`fas fa-user ${styles.icon}`} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
