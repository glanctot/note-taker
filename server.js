const express = require('express');
const app = express();

const notes = require('./db/db.json');

app.get('/api/notes', (req, res) => {
    res.json(notes);
})





app.listen(3001, () => {
    console.log(`API server now on port 3001`);
})

//db.json file on back end to store and retrieve notes using fs module
// HTML routes should be created
    // GET /notes should return the notes.html
    // GET * (wild card) should return index.html
// API routes should be created
    // GET /api/notes should read db.json and return all saved notes as JSON
    // POST /api/notes should receive new note, add to db.json and return new note to client
    // each note will need a unique id when saved (look into npm packes)