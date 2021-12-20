const router = require('express').Router();
const path = require('path');
const fs = require('fs');

// const createNewNote = require('../../lib/notes.js');
// const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
})

/* router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);

    res.json(note);
}); */

module.exports = router;