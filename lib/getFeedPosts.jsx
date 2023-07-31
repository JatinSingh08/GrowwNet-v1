export default async function getFeedPosts() {
  const clientId2 = '3LZv2FayDXuLt1wIWNNab6qPYXs1zEKvK1'
  const clientId1 = '04IlfMjge3L2iMia257hp87WUnR1CdmFExKnTJleQXU'
  const clientId3 = '_lf9V21h8xCBbEjqMBUjhGnLoA_icakFUgpJfgTnfKM';
  const api = `https://api.unsplash.com/photos/random?client_id=${clientId1}&count=1`;

  const res = await fetch(api, {
    next: {
      revalidate: 6000,
      
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}