import axios from 'axios';
import SpotifyWrapper from '../src/index';

jest.mock('axios');

describe('Album', () => {
  let data, spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo',
    });

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
    test('should getAlbum be defined', () => {
      expect(spotify.album.getAlbum).toBeDefined();
    });

    test('should getAlbums be defined', () => {
      expect(spotify.album.getAlbums).toBeDefined();
    });

    test('should getTracks be defined', () => {
      expect(spotify.album.getTracks).toBeDefined();
    });
  });

  describe('getAlbum', () => {
    test('should be called once', async() => {
      const album = await spotify.album.getAlbum();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const album = await spotify.album.getAlbum('4EnNuo8fG7dMoxMefbApRY');
      expect(axios.get).toBeCalledWith('https://api.spotify.com/v1/albums/4EnNuo8fG7dMoxMefbApRY', expect.anything())

      const album2 = await spotify.album.getAlbum('4EnNuo8fG7dMoxMefbApRK');
      expect(axios.get).toBeCalledWith('https://api.spotify.com/v1/albums/4EnNuo8fG7dMoxMefbApRK', expect.anything())
    });

    test('should return the JSON Data from the Promise', async() => {
      await expect(spotify.album.getAlbum('4EnNuo8fG7dMoxMefbApRY')).resolves.toEqual(data);
    });
  });

  describe('getAlbums', () => {
    test('should be called once', async() => {
      const albums = await spotify.album.getAlbums();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const albums = await spotify.album.getAlbums(['4EnNuo8fG7dMoxMefbApRY', '4EnNuo8fG7dMoxMefbApRK']);
      expect(axios.get).toBeCalledWith('https://api.spotify.com/v1/albums/?ids=4EnNuo8fG7dMoxMefbApRY,4EnNuo8fG7dMoxMefbApRK', expect.anything());
    });


    test('should return the JSON Data from the Promise', async() => {
      await expect(spotify.album.getAlbums(['4EnNuo8fG7dMoxMefbApRY', '4EnNuo8fG7dMoxMefbApRK'])).resolves.toEqual(data);
    });
  });

  describe('getTracks', () => {
    test('should be called once', async() => {
      const tracks = await spotify.album.getTracks();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const tracks = await spotify.album.getTracks('4EnNuo8fG7dMoxMefbApRY');
      expect(axios.get).toBeCalledWith('https://api.spotify.com/v1/albums/4EnNuo8fG7dMoxMefbApRY/tracks', expect.anything());
    });


    test('should return the JSON Data from the Promise', async() => {
      await expect(spotify.album.getTracks('4EnNuo8fG7dMoxMefbApRY')).resolves.toEqual(data);
    });
  });
});
