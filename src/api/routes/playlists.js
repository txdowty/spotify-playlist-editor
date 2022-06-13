const express = require('express');
// const playlists = require('../../models/playlists')
const asyncify = require('express-asyncify')

// const spotifyWebApi = require('../../services/spotify_web_api.js');
const model = require('../../models/playlists.js')
const formatter = require('../../models/fancytree_formatter.js')

const router = asyncify(express.Router());

/**
 * GET request to /playlists
 */
// router.get('/', async function(req, res, next) {
//     const sortedPlaylists = async () => {
//         names = await playlists.playlistNames();
//         console.log(names);
//         // .then(function (data) {
//             // res.contentType('application/json');
//             // res.send(JSON.stringify(data));
//         // }),
//         // (err) => {
//         // console.log('Something went wrong:', err.message);
//     }
//     sortedPlaylists()
// });

router.get('/', async (req, res, next) => {
  let playlists = await model.getPlaylists();
  titles = formatter.titlesSorted(playlists);
  res.contentType('application/json');
  res.send(JSON.stringify(titles));
});

router.get('/titles-sorted', async (req, res, next) => {
  let playlists = await model.getPlaylists();
  console.log(JSON.stringify(formatter.titlesSorted(playlists)));
  res.contentType('application/json');
  res.send(JSON.stringify(formatter.titlesSorted(playlists)));

  // return JSON.stringify(formatter.titlesSorted(playlists));
  // const spotifyApi = spotifyWebApi.getApi();
  // spotifyApi.getUserPlaylists()
  // .then(function (data) {
  //   var playlists = [];
  //   console.log(data);
  //   data.body.items.forEach(playlist => {
  //     console.log(playlist.name);
  //     playlists.push({ title: playlist.name })
  //   });
  //   return playlists.sort((a, b) => a.title.localeCompare(b.title));
  // })
  // .then(function (data) {
  //   res.contentType('application/json');
  //   res.send(JSON.stringify(data))
  // },
  //   function (err) {
  //     console.log('Something went wrong:', err.message);
  //   }
  // );
});

router.get('/hierarchy', async (req, res, next) => {
  let playlists = await model.getPlaylists();
  titles_hierarchy = formatter.displayFormatFromRawPlaylists(playlists);
  console.log(JSON.stringify(titles_hierarchy));
  res.contentType('application/json');
  res.send(JSON.stringify(titles_hierarchy));
});

router.get('/:url', (req, res, next) => {
  res.redirect(req.params.url);
  res.end();
});

module.exports = router;