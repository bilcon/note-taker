const router = require("express").Router();
const store = require("../db/store.js");

router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json(err));
});

router.post("/notes", (req, res) => {
  store
    .addNotes(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).send("No new notes.").json(err));
});

router.delete("/notes/:id", function (req, res) {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
