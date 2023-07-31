import getFeedPosts from '@/lib/getFeedPosts';
import React from 'react'
import Feed from './Feed';
import styles from './styles.module.css'
const InitialPosts = async () => {
  const feedData =  await getFeedPosts();


  return (
    <div className={styles.feed__container}>
    {
      feedData?.map(post => <Feed initialPosts={feedData} key={post.id}/>)
    }
  </div>
  )
}

export default InitialPosts
