const express = require('express');
// const fetchuser = require('../Middleware/fetchuser'); // Ensure correct import path
const fetchuser=require('../Middleware/fetchuser')
const Item=require('../modals/Item')
// const Notes = require('../models/Item'); // Ensure correct import path
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Route to fetch all notes for the logged-in user
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        // Fetch notes associated with the logged-in user
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error has occurred");
    }
});

// Route to add a new note with the user id
router.post('/addnote', fetchuser, [
    body('title').notEmpty().withMessage('Enter a valid title').isLength({ min: 3 }),
    body('description').notEmpty().withMessage('Enter the description of the note').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        // Create and save the new note
        const note = new Notes({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error has occurred");
    }
});
// here we are updating the notes that are already exits of the users 
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };
    //  From here you can find the notes that you want to update and then update the note 
    let note = await Notes.findById(req.params.id);
    if (!note) { return res.json("Not Found") }
    if (note.user.toString() !== req.user.id) {
        return res.json("un authorized person wo is accessing the notes")
    }
    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json({note})
})
// now we are deleting the notes that are present in our database
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    //  From here you can find the notes that you want to update and then update the note 
    let note = await Notes.findById(req.params.id);
    if (!note) { return res.json("Not Found") }
    if (note.user.toString() !== req.user.id) {
        return res.json("un authorized person wo is accessing the notes")
    }
    note = await Notes.findByIdAndDelete(req.params.id)
    res.json({"Success":"note has been deleted"})
})


module.exports = router;