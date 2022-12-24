import Image from "next/image";
import { FC } from "react";
import styles from "./card.module.css";

interface ICardProps {
  image: string;
  name: string;
  hospital: string;
  specialization: string;
  about: string;
  price: string;
}

const Card: FC<ICardProps> = ({
  image,
  name,
  hospital,
  specialization,
  about,
  price,
}) => {
  return (
    <div className={styles["card"]}>
      <div className="flex">
        {/* Card Image Wrapper */}
        <div className={styles["card-image-wrapper"]}>
          <Image
            src={image}
            alt={name}
            priority={true}
            fill={true}
            className={styles["image"]}
            sizes="100%"
          />
        </div>
        {/* Card Essential Information */}
        <div className={styles["card-info-wrapper"]}>
          <h4>{name}</h4>
          <small>{hospital}</small>
          <span>{specialization}</span>
        </div>
      </div>
      {/* Divider */}
      <hr className="mt-2" />
      {/* Card Description Detail */}
      <div className={styles["card-description-wrapper"]}>
        <span>Tentang :</span>
        <div dangerouslySetInnerHTML={{ __html: about }} />
      </div>
      <div className={styles["card-price-badge"]}>{price}</div>
    </div>
  );
};

export default Card;
