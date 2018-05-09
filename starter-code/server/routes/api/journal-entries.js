const express = require('express');

const router = express.Router();
const Entry = require('../../models/journal-entry');


router.get('/journal-entries', (req, res) => {
  Entry.find({}, (err, entries) => {
    if (err) { return res.json(err).status(500); }
    console.log(entries);
    return res.json(entries);
  });
});

router.get('/journal-entries/:id', (req, res) => {
  Entry.findById(req.params.id, (err, entry) => {
    if (err) { return res.json(err).status(500); }
    if (!entry) { return res.json(err).status(404); }

    return res.json(entry);
  });
});

router.post('/journal-entries', (req, res) => {
  const newEntry = new Entry({
    title: req.body.title,
    content: req.body.content,
  });

  newEntry.save((err) => {
    if (err) { return res.status(500).json(err); }
    if (newEntry.errors) { return res.status(400).json(newEntry); }
    return res.json(newEntry);
  });
});

module.exports = router;
