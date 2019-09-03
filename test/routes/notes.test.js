require('dotenv').config();

const request = require('supertest');
const app = require('../../lib/app');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');
const seedData = require('../seedData');

describe('notes routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates and returns a new note', () => {
    return request(app)
      .post('/api/v1/notes')
      .send({
        title: 'Note Title',
        body: 'im a really cool note'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'Note Title',
          body: 'im a really cool note',
          __v: 0
        });
      });
  });

  it('can get all notes', () => {
    seedData();
    
    return request(app)
      .get('/api/v1/notes')
      .then(res => {
        expect(res.body).toHaveLength(4);
      });
  });

  it('can get a note by id', async() => {
    const notes = await seedData();
    const note = notes[0];

    return request(app)
      .get(`/api/v1/notes/${note._id}`)
      .then(res => {
        expect(res.body).toEqual(note);
      });

  });
});
