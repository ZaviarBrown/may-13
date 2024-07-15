// Phase 2
const {
    getAllArtists,
    getLatestArtist,
    getArtistByArtistId,
    addArtist,
    editArtistByArtistId,
    deleteArtistByArtistId,
    getAlbumsForLatestArtist,
    getAlbumsByArtistId,
    getAlbumByAlbumId,
    addAlbumByArtistId,
    editAlbumByAlbumId,
    deleteAlbumByAlbumId,
    getFilteredAlbums,
    getSongsByArtistId,
    getSongsByAlbumId,
    getSongBySongId,
    addSongByAlbumId,
    editSongBySongId,
    deleteSongBySongId,
} = require('./data');

const express = require('express');

//! --------------------------------------------------------------------
//*                          Testing for funsies
//! --------------------------------------------------------------------
// const app = express(); // let myCat;

// // Will not parse JSON correctly

// app.use((req, res, next) => {
//     console.log("I'm the FIRST one >:(");

//     console.log(req.body);

//     next();
// });
// // app.use(someOtherThing())
// app.use(express.json()); // myCat = "Momo"

// // Will parse JSON correctly

// app.use((req, res, next) => {
//     console.log('THIS BE THE REQUEST:', req.body);
//     next();
// });

// app.use((req, res, next) => {
//     console.log("I'm the next one :)");

//     console.log("Here's my body one more time 😳", req.body);

//     next();
// });

//! --------------------------------------------------------------------
//*                    Actually solving the practice
//! --------------------------------------------------------------------

const app = express();
app.use(express.json());

//? Just a fancy console.log
app.use((req, res, next) => {
    console.log('THIS BE THE REQUEST:', req.body);
    next(); // Pretend like nothing happened, carry on, not the code you're looking for
});

app.get('/artists', (req, res) => {
    // Defaults to status code of 200

    res.json(getAllArtists());
});
// Hey look at me
app.post('/artists', (req, res) => {
    res.status(201).json(addArtist(req.body));
});

// DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}
