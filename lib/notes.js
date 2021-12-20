const fs = require('fs');
const path = require('path');

function createNewNote () {
    fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(parsedNotes), (err) => {
        if(err) throw err;
        console.log("note saved!");
    })
}

module.exports = createNewNote;