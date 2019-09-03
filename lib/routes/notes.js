const { Router } = require('express');
const Note = require('../models/Notes');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      title,
      body
    } = req.body;

    Note
      .create({ title, body })
      .then(note => res.send(note))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Note 
      .find()
      .then(notes => res.send(notes))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Note
      .findById(req.params.id)
      .then(note => res.send(note))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    const keys = [
      'title',
      'body'
    ];


    const update = keys.reduce((acc, key) => {
      const value = req.body[key];
      if(value) acc[key] = value;
      return acc;
    }, {});

    Note
      .findByIdAndUpdate(req.params.id, update, { new: true })
      .then(note => res.send(note))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Note
      .findByIdAndDelete(req.params.id)
      .then(deletedNote => res.send(deletedNote))
      .catch(next);
  });
