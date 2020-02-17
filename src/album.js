import axios from 'axios';

import { API_URL, HEADERS } from './config';

export const getAlbum = id => {
  return axios.get(`${API_URL}/albums/${id}`, HEADERS)
};

export const getAlbums = ids => {
  return axios.get(`${API_URL}/albums/?ids=${ids}`, HEADERS)
};

export const getAlbumTracks = id => {
  return axios.get(`${API_URL}/albums/${id}/tracks`, HEADERS)
};
