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
const app = express();

app.use(express.json());

app.get('/artists/:artistId', (req, res) => {
    res.json(getArtistByArtistId(req.params.artistId));
});

app.put('/artists/:artistId', (req, res) => {
    const { artistId } = req.params;
    const { name } = req.body;

    const editedArtist = editArtistByArtistId(artistId, { name });

    res.status(200).json(editedArtist);
});

app.patch('/artists/:artistId', (req, res) => {
    const { artistId } = req.params;
    const { name } = req.body;

    const editedArtist = editArtistByArtistId(artistId, { name });

    res.status(200).json(editedArtist);
});

// DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}
