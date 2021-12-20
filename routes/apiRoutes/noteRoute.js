const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
})

router.post('/notes', (req, res) => {
    const { title, text} = req.body;

    const newNote = {
        title,
        text,
        id: uuidv4()
    }


    fs.readFile(path.join(__dirname, '../../db/db.json'), 'utf-8', (err, data) => {
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);

        fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(parsedNotes), (err) => {
            if(err) throw err;
        })
    });
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});



module.exports = router;