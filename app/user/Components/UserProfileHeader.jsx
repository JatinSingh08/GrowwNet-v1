import Image from 'next/image';
import React from 'react'
import styles from './../styles.module.css'
import { MapPinIcon } from '@heroicons/react/24/outline'


const UserProfileHeader = ({user}) => {
  const { id, username, name, portfolio_url, bio, location ,followers_count, following_count, total_photos, profile_image} =  user;

  return (
    <div className={styles.profile__header_container}>
      <div>
        <Image src={profile_image?.large} alt='avatar' width={200} height={200} className={styles.profile__image}/>
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
          {/* <div>
            <div>
              <MapPinIcon />
            </div>
            <p>{location}</p>
          </div> */}
          <p>{portfolio_url}</p>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfileHeader



// {
//   user: {
//     id: '0EHyo51JxyY',
//     updated_at: '2023-07-27T12:39:57Z',
//     username: 'loniel',
//     name: 'Olga Deeva',
//     first_name: 'Olga',
//     last_name: 'Deeva',
//     twitter_username: null,
//     portfolio_url: 'https://olyadeeva.com/',
//     bio: 'Graphic design/photography/3d art',
//     location: 'Mosocw',
//     links: {
//       self: 'https://api.unsplash.com/users/loniel',
//       html: 'https://unsplash.com/@loniel',
//       photos: 'https://api.unsplash.com/users/loniel/photos',
//       likes: 'https://api.unsplash.com/users/loniel/likes',
//       portfolio: 'https://api.unsplash.com/users/loniel/portfolio',
//       following: 'https://api.unsplash.com/users/loniel/following',
//       followers: 'https://api.unsplash.com/users/loniel/followers'
//     },
//     profile_image: {
//       small: 'https://images.unsplash.com/profile-1635755082522-fd6c6aeec4a3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
//       medium: 'https://images.unsplash.com/profile-1635755082522-fd6c6aeec4a3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
//       large: 'https://images.unsplash.com/profile-1635755082522-fd6c6aeec4a3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'
//     },
//     instagram_username: null,
//     total_collections: 0,
//     total_likes: 444,
//     total_photos: 280,
//     accepted_tos: true,
//     for_hire: false,
//     social: {
//       instagram_username: null,
//       portfolio_url: 'https://olyadeeva.com/',
//       twitter_username: null,
//       paypal_email: null
//     },
//     followed_by_user: false,
//     photos: [ [Object], [Object], [Object] ],
//     badge: null,
//     tags: { custom: [], aggregated: [Array] },
//     followers_count: 31,
//     following_count: 0,
//     allow_messages: true,
//     numeric_id: 8360402,
//     downloads: 24135,
//     meta: { index: true }
//   }
// }
