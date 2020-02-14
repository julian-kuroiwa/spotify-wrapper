import { API_URL } from './config';

export const getAlbum = id => {
  return fetch(`${API_URL}/albums/${id}`)
    .then(data => data);
};

export const getAlbums = ids => {
  return fetch(`${API_URL}/albums/?ids=${ids}`)
    .then(data => data);
};

export const getAlbumTracks = id => {
  return fetch(`${API_URL}/albums/${id}/tracks`)
    .then(data => data);
};
