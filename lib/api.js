// lib/api.js
// import fetch from 'node-fetch';

const cache = {};
const cacheDuration = 60 * 60 * 1000; // Cache data for 1 hour

export async function fetchDataWithCaching(url) {
  if (cache[url] && cache[url].expiry > Date.now()) {
    // If the data is cached and not expired, return the cached data
    return cache[url].data;
  }

  // Fetch data from the API
  const response = await fetch(url);
  const data = await response.json();

  // Cache the data with the current timestamp as the expiry time
  cache[url] = {
    data,
    expiry: Date.now() + cacheDuration,
  };

  return data;
}
