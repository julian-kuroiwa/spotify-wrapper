import axios from 'axios';

import SpotifyWrapper from '../src/index';

jest.mock('axios');

describe('Spotify Wrapper', () => {
  let data, spotify, headers;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });

    headers = {
      headers: {
        Authorization: `Bearer ${spotify.token}`
      }
    }

    data = {
      data: [
        {
          userId: 1,
          id: 1,
          title: 'My First Album'
        },
        {
          userId: 1,
          id: 2,
          title: 'Album: The Sequel'
        }
      ]
    }

    axios.get.mockResolvedValue(data);
  });

  afterEach(() => {
    axios.get.mockRestore();
  });

  describe('smoke tests', () => {
    test('should exist the spotify.search.albums method', () => {
      expect(spotify.search.albums).toBeDefined();
    });

    test('should exist the spotify.search.artists method', () => {
      expect(spotify.search.artists).toBeDefined();
    });

    test('should exist the spotify.search.tracks method', () => {
      expect(spotify.search.tracks).toBeDefined();
    });

    test('should exist the spotify.search.playlists method', () => {
      expect(spotify.search.playlists).toBeDefined();
    });
  });

  describe('spotify.search.artists', () => {
    test('should call fetch function', async() => {
      const artists =  await spotify.search.artists();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const artist = await spotify.search.artists('Incubus');
      expect(axios.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist', headers);
    });
  });

  describe('spotify.search.albums', () => {
    test('should call fetch function', async() => {
      const albums = await spotify.search.albums();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const albums = await spotify.search.albums('Incubus');
      expect(axios.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=album', headers);
    });
  });

  describe('spotify.search.tracks', () => {
    test('should call fetch function', async() => {
      const tracks = await spotify.search.tracks();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const tracks = await spotify.search.tracks('Incubus');
      expect(axios.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=track', headers);
    });
  });

  describe('spotify.search.playlists', () => {
    test('should call fetch function', async() => {
      const playlists = await spotify.search.playlists();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const playlists = await spotify.search.playlists('Incubus');
      expect(axios.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist', headers);
    });
  });
});
