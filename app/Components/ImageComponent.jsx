import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { decode } from "blurhash";


const ImageComponent = ({ postData }) => {
  const {
    urls,
    blur_hash,
  } = postData;

  const placeholderDataURL = decode(blur_hash, 60, 60);

  return (
    <div>
      <Image
        src={urls?.regular}
        alt="avatar"
        width={60}
        height={60}
        className={styles["user-avatar"]}
        loading="lazy"
        blurDataURL={placeholderDataURL}
      />
    </div>
  );
};

export default ImageComponent;
