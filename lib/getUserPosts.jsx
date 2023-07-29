export default async function getUserPosts(photosApi) {

  const res = await fetch(photosApi);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}