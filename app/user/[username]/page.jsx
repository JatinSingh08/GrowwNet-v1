import getUser from '@/lib/getUser'
import React from 'react'
import UserProfileHeader from '../Components/UserProfileHeader';
import styles from './page.module.css'
import UserPosts from '../Components/UserPosts';

const page = async ({params: {username}}) => {

  const user = await getUser(username);
  return (
    <div className={styles.main}>
      <UserProfileHeader user={user} />
      <UserPosts user={user} />
    </div>
  )
}

export default page
