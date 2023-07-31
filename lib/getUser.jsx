export default async function getUser(username) {
  const clientId2 = '3LZv2FayDXuLt1wIWNNab6qPYXs1zEKvK1'
  const clientId1 = '04IlfMjge3L2iMia257hp87WUnR1CdmFExKnTJleQXU'
  const clientId3 = '_lf9V21h8xCBbEjqMBUjhGnLoA_icakFUgpJfgTnfKM';
  const api = `https://api.unsplash.com/users/${username}?client_id=${clientId1}`;

  const res = await fetch(api);
  if(!res.ok) {
    throw new Error('Failed to feed data');
  }
  return res.json();
}
