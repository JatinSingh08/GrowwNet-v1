import Image from "next/image";
import React from "react";
import styles from "./../styles.module.css";
import { MapPinIcon } from "@heroicons/react/24/outline";

const UserProfileHeader = ({ user }) => {
  const {
    id,
    username,
    name,
    portfolio_url,
    bio,
    location,
    followers_count,
    following_count,
    total_photos,
    profile_image,
  } = user;

  return (
    <div className={styles.profile__header_container}>
      <div>
        <Image
          src={profile_image?.large}
          alt="avatar"
          width={200}
          height={200}
          className={styles.profile__image}
          loading="lazy"
        />
      </div>
      <div className={styles.profile__header}>
        <div>
          <h3>{username}</h3>
          <button>Follow</button>
        </div>
        <div>
          <div>
            <p>{total_photos}</p>
            <p>posts</p>
          </div>
          <div>
            <p>{followers_count} </p>
            <p>followers</p>
          </div>
          <div>
            <p>{following_count}</p>
            <p>following</p>
          </div>
        </div>

        <div>
          <p>{name}</p>
          <p>{location}</p>
          <p>{portfolio_url}</p>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileHeader;
