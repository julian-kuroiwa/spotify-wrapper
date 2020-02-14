"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
const TOKEN_API = 'BQALSJ-njjYWJUgnyAyoAHZ7YHatxMb9pG41y0_5Et3Sjz8W43G_GihIbKDfFVkCootlxYsLZHbELKLsKHV-pq2KAoA2iCvCnVNzkZDVRnHWFKFqKdOYXIypxOef_p1ggNzMZ6A8wNFeD9JCG03OKJ8ygXWq8IydvGn-KMB56uMqpbUE5iSbA1Q5QWmVKsd3cNv5JfeJR1nNg3TO1g5DcBrMgj5f0m2XFrAKFDm55RvkEAyR4ezW_Ua1cd5iW0KScSKwl3f9lIMwwbfSzsx3rmC_fnwILg';
const API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
const HEADERS = {
  headers: {
    Authorization: `Bearer ${TOKEN_API}`
  }
};
exports.HEADERS = HEADERS;