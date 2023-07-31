'use client'
import React from 'react';
import useSWR from 'swr';

const GetMorePosts = () => {
  const clientId2 = '3LZv2FayDXuLt1wIWNNab6qPYXs1zEKvK1'
  const clientId1 = '04IlfMjge3L2iMia257hp87WUnR1CdmFExKnTJleQXU'
  const clientId3 = '_lf9V21h8xCBbEjqMBUjhGnLoA_icakFUgpJfgTnfKM';
  const api = `https://api.unsplash.com/photos/random?client_id=${clientId3}&count=2`;

  const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR(api, fetcher, {
    revalidateOnFocus: false, // Disable revalidation on window focus
    refreshInterval: 60 * 1000, // Cache refresh interval in milliseconds (1 minute)
  });

  return (
    <div>
      {error && <p>Error fetching data</p>}
      {data && (
        <div>
          {/* Render your fetched data here */}
        </div>
      )}
    </div>
  );
};

export default GetMorePosts;
