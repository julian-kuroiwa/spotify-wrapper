import {getAlbum, getAlbumTracks, getAlbums} from '../src/album';

describe('Album', () => {
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
    test('should getAlbum be defined', () => {
      expect(getAlbum).toBeDefined();
    });

    test('should getAlbums be defined', () => {
      expect(getAlbums).toBeDefined();
    });

    test('should getAlbumTracks be defined', () => {
      expect(getAlbumTracks).toBeDefined();
    });
  });

  describe('getAlbum', () => {
    test('should be called once', () => {
      const album = getAlbum();
      expect(fetchSpy).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', () => {
      const album = getAlbum('4EnNuo8fG7dMoxMefbApRY');
      expect(fetchSpy).toBeCalledWith('https://api.spotify.com/v1/albums/4EnNuo8fG7dMoxMefbApRY', expect.anything())

      const album2 = getAlbum('4EnNuo8fG7dMoxMefbApRK');
      expect(fetchSpy).toBeCalledWith('https://api.spotify.com/v1/albums/4EnNuo8fG7dMoxMefbApRK', expect.anything())
    });

    test('should return the JSON Data from the Promise', () => {
      promise.mockResolvedValue({body: 'ok'});
      const album = getAlbum('4EnNuo8fG7dMoxMefbApRY');

      expect(album).resolves.toEqual({body: 'ok'});
    });
  });

  describe('getAlbums', () => {
    test('should be called once', () => {
      const albums = getAlbums();
      expect(fetchSpy).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', () => {
      const albums = getAlbums(['4EnNuo8fG7dMoxMefbApRY', '4EnNuo8fG7dMoxMefbApRK']);
      expect(fetchSpy).toBeCalledWith('https://api.spotify.com/v1/albums/?ids=4EnNuo8fG7dMoxMefbApRY,4EnNuo8fG7dMoxMefbApRK', expect.anything());
    });


    test('should return the JSON Data from the Promise', () => {
      promise.mockResolvedValue({body: 'ok'});
      const album = getAlbums(['4EnNuo8fG7dMoxMefbApRY', '4EnNuo8fG7dMoxMefbApRK']);

      expect(album).resolves.toEqual({body: 'ok'});
    });
  });

  describe('getAlbumTracks', () => {
    test('should be called once', () => {
      const tracks = getAlbumTracks();
      expect(fetchSpy).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', () => {
      const tracks = getAlbumTracks('4EnNuo8fG7dMoxMefbApRY');
      expect(fetchSpy).toBeCalledWith('https://api.spotify.com/v1/albums/4EnNuo8fG7dMoxMefbApRY/tracks', expect.anything());
    });


    test('should return the JSON Data from the Promise', async() => {
      promise.mockResolvedValue({body: 'ok'});
      const tracks = getAlbumTracks('4EnNuo8fG7dMoxMefbApRY');

      expect(tracks).resolves.toEqual({body: 'ok'});
    });
  });
});
