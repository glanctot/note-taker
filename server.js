const express = require('express');
const fs = require('fs');
const path = require('path');
// const { uuid } = require('uuidv4');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());


const notes = require('./db/db.json');

function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    )

    return note;
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);

    res.json(note);
});



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})

//db.json file on back end to store and retrieve notes using fs module
// HTML routes should be created
    // GET /notes should return the notes.html
    // GET * (wild card) should return index.html
// API routes should be created
    // GET /api/notes should read db.json and return all saved notes as JSON
    // POST /api/notes should receive new note, add to db.json and return new note to client
    // each note will need a unique id when saved (look into npm packes)