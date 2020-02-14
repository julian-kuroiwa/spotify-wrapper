"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = void 0;

var _config = require("./config");

var _utils = require("./utils");

const getAlbum = id => {
  return fetch(`${_config.API_URL}/albums/${id}`, _config.HEADERS).then(_utils.toJSON);
};

exports.getAlbum = getAlbum;

const getAlbums = ids => {
  return fetch(`${_config.API_URL}/albums/?ids=${ids}`, _config.HEADERS).then(_utils.toJSON);
};

exports.getAlbums = getAlbums;

const getAlbumTracks = id => {
  return fetch(`${_config.API_URL}/albums/${id}/tracks`, _config.HEADERS).then(_utils.toJSON);
};

exports.getAlbumTracks = getAlbumTracks;