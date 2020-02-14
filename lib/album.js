"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = void 0;

var _config = require("./config");

const getAlbum = id => {
  return fetch(`${_config.API_URL}/albums/${id}`).then(data => data);
};

exports.getAlbum = getAlbum;

const getAlbums = ids => {
  return fetch(`${_config.API_URL}/albums/?ids=${ids}`).then(data => data);
};

exports.getAlbums = getAlbums;

const getAlbumTracks = id => {
  return fetch(`${_config.API_URL}/albums/${id}/tracks`).then(data => data);
};

exports.getAlbumTracks = getAlbumTracks;
//# sourceMappingURL=album.js.map