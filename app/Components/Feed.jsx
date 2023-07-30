'use client'
import getFeedPosts from '@/lib/getFeedPosts'
import React, { useEffect, useRef, useState } from 'react'
import Post from './Post';
import styles from './styles.module.css'
import InfiniteScroll from "react-infinite-scroller";
import Spinner from './Spinner';

const Feed =  ({initialPosts}) => {
  // const feedData =  await getFeedPosts();
  const fetching = useRef(false);
  const [feedPostData, setFeedPostData] = useState(initialPosts);
  // const [count, setCount] = useState(0);

  const loadMore = async (count) => {
    if (!fetching.current) {
      try {
        fetching.current = true;
        const clientId2 = '3LZv2FayDXuLt1wIWNNab6qPYXs1zEKvK1'
        const clientId1 = '04IlfMjge3L2iMia257hp87WUnR1CdmFExKnTJleQXU'
        const clientId3 = '_lf9V21h8xCBbEjqMBUjhGnLoA_icakFUgpJfgTnfKM';
        const api = `https://api.unsplash.com/photos/random?client_id=${clientId1}&count=2`;

        const response = await fetch(
          api
        );
        const data = await response.json();
        console.log({data})
        setFeedPostData((prev) => [...prev, ...data]);
      } finally {
        fetching.current = false;
      }
    }
  };

  // const handleInfiniteScroll = async () => {
  //   try {
  //     if(
  //       window.innerHeight + document.documentElement.scrollTop + 1 >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       setCount(prev => prev + 4);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleInfiniteScroll);

  //   return () => window.removeEventListener('scroll', handleInfiniteScroll);
  // } ,[])
  // useEffect(() => {
  //   loadMore(count);
  // } ,[count])
  return (
    <InfiniteScroll
    hasMore
    pageStart={0}
    loadMore={loadMore}
    loader={
     <Spinner />
    }
    element="main"
  >
    <div className={styles.feed__container}>
      {
        feedPostData?.map(post => <Post postData={post} key={post.id}/>)
      }
    </div>
    </InfiniteScroll>
  )
}

export default Feed
