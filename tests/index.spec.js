import axios from 'axios';

import SpotifyWrapper from '../src/index';

jest.mock('axios');

describe('SpotifyWrapper init', () => {
  test('should instatiate SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).toBeInstanceOf(SpotifyWrapper);
  });

  test('should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'lalalala'
    });

    expect(spotify.apiURL).toBe('lalalala');
  });

  test('should use the default apiURL if none is provided', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).toBe('https://api.spotify.com/v1');
  });

  test('should receive token as an option', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo'
    });

    expect(spotify.token).toBe('foo');
  })

  describe('request method', () => {
    let spotify, headers;

    beforeEach(() => {
      spotify = new SpotifyWrapper({
        token: 'foo'
      });

      headers = {
        headers: {
          Authorization: `Bearer ${spotify.token}`
        }
      }
    });

    afterEach(() => {
      axios.get.mockRestore();
    });

    test('should have request method', () => {
      expect(spotify.request).toBeTruthy();
    });

    test('should call fetch when requested', () => {
      spotify.request();

      expect(axios.get).toBeCalledTimes(1);
    });

    test('should call fetch with right url passed', () => {
      spotify.request('url');
      expect(axios.get).toHaveBeenCalledWith('url', headers);
    });

    test('should call fetch with right headers passed', async() => {
      const request = await spotify.request('url');
      expect(axios.get).toHaveBeenCalledWith('url', headers);
    });
  });
});
