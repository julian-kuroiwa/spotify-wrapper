import axios from 'axios';

import { API_URL, HEADERS } from './config';

export const search = async(query, type) => {
  return await axios.get(`${API_URL}/search?q=${query}&type=${type}`, HEADERS)
}

export const searchAlbums = query => search(query, 'album');
export const searchArtists = query => search(query, 'artist');
export const searchTracks = query => search(query, 'track');
export const searchPlaylists = query => search(query, 'playlist');
