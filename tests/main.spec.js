import {
  search,
  searchAllbums,
  searchArtists,
  searchPlaylists,
  searchTracks
} from '../src/main';

describe('Spotify Wrapper', () => {
  describe('smoke tests', () => {
    test('should exist the search method', () => {
      expect(search).toBeDefined();
    });


  test('should exist the searchAllbums method', () => {
      expect(searchAllbums).toBeDefined();
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
    let fetchSpy;
    let promise;

    beforeEach(() => {
      fetchSpy = jest.spyOn(global, 'fetch');
    });

    afterEach(() => {
      fetchSpy.mockRestore();
    });

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
    });
  });
});
