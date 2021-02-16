const { Router } = require('express');
const LogEntry = require('../models/LogEntery');
const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const Entries = await LogEntry.find();

    res.status(200).json(Entries);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const logEntery = new LogEntry(req.body);
    const createdEntery = await logEntery.save();
    res.status(201).json(createdEntery);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400);
    }
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await LogEntry.findByIdAndDelete(req.params.id);
    res.json(null);
  } catch (err) {
    res.status(404);
    next(err);
  }
});

module.exports = router;
