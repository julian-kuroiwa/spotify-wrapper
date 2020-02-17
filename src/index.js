import search from './search';
import album from './album';

import { API_URL } from './config';
import axios from 'axios';

export default class SpotifyWrapper {
  constructor(option) {
    this.apiURL = option.apiURL || API_URL;
    this.token = option.token;

    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }

    return axios.get(url, headers);
  }
}
