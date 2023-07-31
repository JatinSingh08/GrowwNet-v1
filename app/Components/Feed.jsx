"use client";
import getFeedPosts from "@/lib/getFeedPosts";
import React, { useEffect, useRef, useState } from "react";
import Post from "./Post";
import styles from "./styles.module.css";
import InfiniteScroll from "react-infinite-scroller";
import Spinner from "./Spinner";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

const Feed = ({ initialPosts }) => {
  // const feedData =  await getFeedPosts();

  const [feedPostData, setFeedPostData] = useState([...initialPosts]);

  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };
  const clientId2 = "3LZv2FayDXuLt1wIWNNab6qPYXs1zEKvK1";
  const clientId1 = "04IlfMjge3L2iMia257hp87WUnR1CdmFExKnTJleQXU";
  const clientId3 = "_lf9V21h8xCBbEjqMBUjhGnLoA_icakFUgpJfgTnfKM";

  const api = `https://api.unsplash.com/photos/random?client_id=${clientId1}&count=2`;

  const { data, error, isLoading, mutate } = useSWRImmutable(api, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  const loadMore = () => {
    // fetcher();
    mutate();
  };

  useEffect(() => {
    if (data) {
      setFeedPostData((prev) => [...prev, ...data]);
    }
  }, [data]);

  return (
    <InfiniteScroll
      hasMore
      pageStart={0}
      loadMore={loadMore}
      loader={<Spinner />}
      element="main"
    >
      <div className={styles.feed__container}>
        {feedPostData?.map((post) => (
          <Post postData={post} key={post.id} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Feed;
