export const search = (query, type) => {
  return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(response => response.json())
    .catch(errors => console.log('Error'));
};
export const searchAllbums = () => {};
export const searchArtists = () => {};
export const searchTracks = () => {};
export const searchPlaylists = () => {};
