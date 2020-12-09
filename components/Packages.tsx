import Card from "./common/Card";

import styles from "./Packages.module.scss";

type Package = {
  name: string;
  image: string;
  description: string;
};

type Props = {
  className?: string;
  packages: Package[];
};

const Packages = ({ className, packages }: Props) => {
  if (!packages)
    return <div className={className ?? ""}>No packages were found.</div>;

  return (
    <div className={[className ?? "", styles.gridContainer].join(" ")}>
      {packages.map(({ name, image, description }) => (
        <Card label={name} image={image} description={description} />
      ))}
    </div>
  );
};

export default Packages;
