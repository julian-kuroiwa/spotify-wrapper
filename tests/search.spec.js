import axios from 'axios';

import {
  search,
  searchAlbums,
  searchArtists,
  searchPlaylists,
  searchTracks
} from '../src/search';

jest.mock('axios');

describe('Spotify Wrapper', () => {
  let data;

  beforeEach(() => {
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
    test('should exist the search method', () => {
      expect(search).toBeDefined();
    });


    test('should exist the searchAllbums method', () => {
      expect(searchAlbums).toBeDefined();
    });

    test('should exist the searchArtists method', () => {
      expect(searchArtists).toBeDefined();
    });

    test('should exist the searchTracks method', () => {
      expect(searchTracks).toBeDefined();
    });

    test('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).toBeDefined();
    });
  });

  describe('Generic Search', () => {
    test('should call fetch function', async() => {
      const artist = await search();
      expect(axios.get).toBeCalledTimes(1);
    });

    describe('should receive correct url to fetch', () => {
      test('passing one type', async() => {
        const artists = await search('Incubus', 'artist');
        expect(axios.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist', expect.anything());

        const albums = await search('Incubus', 'album');
        expect(axios.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=album', expect.anything());
      });

      test('passing more than one type', async() => {
        const artistsAndAlbums = await search('Incubus', ['artist', 'album']);
        expect(axios.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album', expect.anything());

        const all = await search('Incubus', ['artist', 'album', 'playlist', 'track']);
        expect(axios.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album,playlist,track', expect.anything());
      });

      test('should return the JSON Data from the Promise', async() => {
        await expect(search('Incubus', 'artist')).resolves.toEqual(data);
      });
    });
  });

  describe('searchArtists', () => {
    test('should call fetch function', async() => {
      const artists =  await searchArtists();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const artist = await searchArtists('Incubus');
      expect(axios.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist', expect.anything());
    });
  });

  describe('searchAlbums', () => {
    test('should call fetch function', async() => {
      const albums = await searchAlbums();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const albums = await searchAlbums('Incubus');
      expect(axios.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=album', expect.anything());
    });
  });

  describe('searchTracks', () => {
    test('should call fetch function', async() => {
      const tracks = await searchTracks();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const tracks = await searchTracks('Incubus');
      expect(axios.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=track', expect.anything());
    });
  });

  describe('searchPlaylists', () => {
    test('should call fetch function', async() => {
      const playlists = await searchPlaylists();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const playlists = await searchPlaylists('Incubus');
      expect(axios.get).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist', expect.anything());
    });
  });
});
