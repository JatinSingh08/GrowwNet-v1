import getUserPosts from "@/lib/getUserPosts";
import Image from "next/image";
import React from "react";
import styles from "./../styles.module.css";
const UserPosts = async ({ user }) => {
  const {
    links: { photos: photosApi },
  } = user;
  // const api = photosApi + '/quantity=100/' + '?client_id=04IlfMjge3L2iMia257hp87WUnR1CdmFExKnTJleQXU';
  const clientId = "3LZv2FayDXuLt1wIWNNab6qPYXs1zEKvK1-DjPNJCAo";

  const api = `${photosApi}/?client_id=${clientId}`;

  const userPosts = await getUserPosts(api);
  // console.log({api})
  return (
    <div className={styles.posts__container}>
      {userPosts?.map((post) => {
        return (
          <div key={post.id} className={styles.post__image_container}>
            <Image
              src={post.urls.thumb}
              alt={post?.description || post?.alt_description}
              fill={true}
              className={styles.post__image}
              placeholder="blur"
              blurDataURL={post?.blur_hash}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserPosts;
