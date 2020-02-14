import { API_URL } from './config';

export const search = (query, type) => {
  return fetch(`${API_URL}/search?q=${query}&type=${type}`)
  .then(response => response)
  .catch(errors => console.log(errors));
}

export const searchAlbums = query => search(query, 'album');
export const searchArtists = query => search(query, 'artist');
export const searchTracks = query => search(query, 'track');
export const searchPlaylists = query => search(query, 'playlist');
