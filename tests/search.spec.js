import {
  search,
  searchAlbums,
  searchArtists,
  searchPlaylists,
  searchTracks
} from '../src/search';

describe('Spotify Wrapper', () => {
  let fetchSpy;
  let promise;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, 'fetch');
    promise = fetchSpy.mockImplementation(() => Promise.resolve());
  });

  afterEach(() => {
    fetchSpy.mockRestore();
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
    test('should call fetch function', () => {
      const artists = search();
      expect(fetchSpy).toBeCalledTimes(1);
    });

    describe('should receive correct url to fetch', () => {
      test('passing one type', () => {
        const artists = search('Incubus', 'artist');
        expect(fetchSpy).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        const albums = search('Incubus', 'album');
        expect(fetchSpy).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });

      test('passing more than one type', () => {
        const artistsAndAlbums = search('Incubus', ['artist', 'album']);
        expect(fetchSpy).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');

        const all = search('Incubus', ['artist', 'album', 'playlist', 'track']);
        expect(fetchSpy).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album,playlist,track');
      });

      test('should return the JSON Data from the Promise', () => {
        promise.mockResolvedValue({body: 'json'});
        const artists = search('Incubus', 'artist');

        expect(artists).resolves.toEqual({body: 'json'});
      })
    });
  });

  describe('searchArtists', () => {
    test('should call fetch function', () => {
      const artists = searchArtists();
      expect(fetchSpy).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', () => {
      const artist = searchArtists('Incubus');
      expect(fetchSpy).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
    });
  });

  describe('searchAlbums', () => {
    test('should call fetch function', () => {
      const albums = searchAlbums();
      expect(fetchSpy).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', () => {
      const albums = searchAlbums('Incubus');
      expect(fetchSpy).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
    });
  });

  describe('searchTracks', () => {
    test('should call fetch function', () => {
      const tracks = searchTracks();
      expect(fetchSpy).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', () => {
      const tracks = searchTracks('Incubus');
      expect(fetchSpy).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
    });
  });

  describe('searchPlaylists', () => {
    test('should call fetch function', () => {
      const playlists = searchPlaylists();
      expect(fetchSpy).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', () => {
      const playlists = searchPlaylists('Incubus');
      expect(fetchSpy).toHaveBeenCalledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
    });
  });
});
