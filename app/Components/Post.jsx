import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { decode } from "blurhash";
import { useInView } from "react-intersection-observer";
import ImageComponent from "./ImageComponent";

const Post = ({ postData }) => {
  const [feedPostData, setFeedPostData] = useState(postData);
  const {
    id,
    urls,
    user,
    location,
    likes,
    description,
    alt_description,
    blur_hash,
  } = postData;
  const { id: userID, username, first_name, last_name, profile_image } = user;

  const placeholderDataURL = decode(blur_hash, 60, 60);

 

  return (
    <div className={styles.post__container}>
      <div className={styles.post__header}>
        <Image
          src={profile_image?.large}
          alt="avatar"
          width={60}
          height={60}
          className={styles["user-avatar"]}
          loading="lazy"
          blurDataURL={placeholderDataURL}
        />
        <div>
          <Link href={`/user/${username}`}>{username}</Link>
          <p>{location?.country || "India"}</p>
        </div>
      </div>
      <div>
          <Image
            src={urls?.regular}
            alt="post"
            className={styles.post__image}
            width={420}
            height={420}
            blurDataURL={blur_hash}
            loading='lazy'
            // loading={inView ? 'eager' : 'lazy'} // Load the image eagerly when it comes into the viewport
          />
          {/* <ImageComponent postData={postData} />  */}
      </div>
      <div className={styles.reactions}>
        <div>
          <HeartIcon />
        </div>
        <div>
          <ChatBubbleOvalLeftIcon />
        </div>
        <div>
          <PaperAirplaneIcon />
        </div>
      </div>
      <div>
        <p>{likes} likes</p>
      </div>
      <div className={styles.description}>
        <Link href={`/user/${username}`}>{username}</Link>
        <p>{description || alt_description}</p>
      </div>
    </div>
  );
};

export default Post;
