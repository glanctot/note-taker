const express = require('express');
const fs = require('fs');
const path = require('path');
// const { uuid } = require('uuidv4');
const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

const apiRoutes = require('./routes/apiRoutes/noteRoute.js');
app.use('/api', apiRoutes);

const htmlRoutes = require('./routes/htmlRoute/index.js');
app.use('/', htmlRoutes);

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