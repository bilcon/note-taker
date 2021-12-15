const router = require("express").Router();
const notes = require("../db/notes.js");

router.get("/notes", (req, res) => {
  notes
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json(err));
});

router.post("/notes", (req, res) => {
  notes
    .addNotes(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).send("No new notes.").json(err));
});

router.delete("/notes/:id", function (req, res) {
  notes
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
