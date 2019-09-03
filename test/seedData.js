const Note = require('../lib/models/Notes');

const notes = [
  {
    title: 'Dogs',
    body: 'pepper, skip, john'
  },
  {
    title: 'Cats',
    body: 'joan, snowball, salt'
  },
  {
    title: 'Birds',
    body: 'tim, maxwell, lisa'
  },
  {
    title: 'cows',
    body: 'spot, milk, giver'
  }
];

module.exports = () => Note.create(notes);
