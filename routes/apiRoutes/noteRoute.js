const router = require('express').Router();
const createNewNote = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');



router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);

    res.json(note);
});

module.exports = router;