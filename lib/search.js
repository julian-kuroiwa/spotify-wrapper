"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = void 0;

var _config = require("./config");

var _utils = require("./utils");

const search = (query, type) => {
  return fetch(`${_config.API_URL}/search?q=${query}&type=${type}`, _config.HEADERS).then(_utils.toJSON).catch(errors => console.log(errors));
};

exports.search = search;

const searchAlbums = query => search(query, 'album');

exports.searchAlbums = searchAlbums;

const searchArtists = query => search(query, 'artist');

exports.searchArtists = searchArtists;

const searchTracks = query => search(query, 'track');

exports.searchTracks = searchTracks;

const searchPlaylists = query => search(query, 'playlist');

exports.searchPlaylists = searchPlaylists;