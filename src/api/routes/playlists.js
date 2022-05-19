const express = require('express');
const playlists = require('../../models/playlists')
const asyncify = require('express-asyncify')

const spotifyWebApi = require('../../services/spotify_web_api.js');
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
  // console.log(JSON.stringify(formatter.titlesSorted(playlists)));
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

router.get('/hierarchy', (req, res, next) => {
  const spotifyApi = spotifyWebApi.getApi();
  spotifyApi.getUserPlaylists()
    .then(function (data) {
      var playlists = [];
      console.log(data);
      data.body.items.forEach(playlist => {
        console.log(playlist.name);
        const segments = playlist.name.split('/');
        if (segments.length == 1) {
          playlists.push({ title: playlist.name })
        }

      });
      return playlists.sort()
    })
    .then(function (data) {
      res.contentType('application/json');
      res.send(JSON.stringify(data))
    },
      function (err) {
        console.log('Something went wrong:', err.message);
      }
    );
});


// /**
//  * GET request to /books/:id
//  */
// router.get('/:id', (req, res, next) => {
//     res.status(200).json({
//         message: 'Book with id was fetch'
//     });
// });

module.exports = router;