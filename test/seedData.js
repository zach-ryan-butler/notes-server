const Note = require('../lib/models/Notes');

const notes = [
  {
    'title': 'Dogs',
    'body': 'pepper, skip, john'
  },
  {
    'title': 'Cats',
    'body': 'joan, snowball, salt'
  },
  {
    'title': 'Birds',
    'body': 'tim, maxwell, lisa'
  },
  {
    'title': 'cows',
    'body': 'spot, milk, giver'
  }
];

module.exports = async() => {
  const noteSeed = await notes.map(note => {
    return Note.create(note);
  });
  return noteSeed;
};
