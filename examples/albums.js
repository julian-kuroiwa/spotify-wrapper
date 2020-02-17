import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'foo',
});

const albums = spotify.album.getAlbums('Incubus');

albums.then(data => console.log(data));
