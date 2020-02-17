import axios from 'axios';
import {getAlbum, getAlbumTracks, getAlbums} from '../src/album';

jest.mock('axios');

describe('Album', () => {
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
    test('should be called once', async() => {
      const album = await getAlbum();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const album = await getAlbum('4EnNuo8fG7dMoxMefbApRY');
      expect(axios.get).toBeCalledWith('https://api.spotify.com/v1/albums/4EnNuo8fG7dMoxMefbApRY', expect.anything())

      const album2 = await getAlbum('4EnNuo8fG7dMoxMefbApRK');
      expect(axios.get).toBeCalledWith('https://api.spotify.com/v1/albums/4EnNuo8fG7dMoxMefbApRK', expect.anything())
    });

    test('should return the JSON Data from the Promise', async() => {
      await expect(getAlbum('4EnNuo8fG7dMoxMefbApRY')).resolves.toEqual(data);
    });
  });

  describe('getAlbums', () => {
    test('should be called once', async() => {
      const albums = await getAlbums();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const albums = await getAlbums(['4EnNuo8fG7dMoxMefbApRY', '4EnNuo8fG7dMoxMefbApRK']);
      expect(axios.get).toBeCalledWith('https://api.spotify.com/v1/albums/?ids=4EnNuo8fG7dMoxMefbApRY,4EnNuo8fG7dMoxMefbApRK', expect.anything());
    });


    test('should return the JSON Data from the Promise', async() => {
      await expect(getAlbums(['4EnNuo8fG7dMoxMefbApRY', '4EnNuo8fG7dMoxMefbApRK'])).resolves.toEqual(data);
    });
  });

  describe('getAlbumTracks', () => {
    test('should be called once', async() => {
      const tracks = await getAlbumTracks();
      expect(axios.get).toBeCalledTimes(1);
    });

    test('should receive correct url to fetch', async() => {
      const tracks = await getAlbumTracks('4EnNuo8fG7dMoxMefbApRY');
      expect(axios.get).toBeCalledWith('https://api.spotify.com/v1/albums/4EnNuo8fG7dMoxMefbApRY/tracks', expect.anything());
    });


    test('should return the JSON Data from the Promise', async() => {
      await expect(getAlbumTracks('4EnNuo8fG7dMoxMefbApRY')).resolves.toEqual(data);
    });
  });
});
