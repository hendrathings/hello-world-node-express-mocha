const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return error response not found (404)', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .end(done);
    });

    it('should return error not found response', (done) => {
      request(app)
        .get('/')
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return response success (200)', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .end(done);
    });
    it('should return user object response', (done) => {
      request(app)
        .get('/users')
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'hendra'
          });
        })
        .end(done);
    });
  });

  describe('GET /help.html', () => {
    it('should return response success (200)', (done) => {
      request(app)
        .get('/help.html')
        .expect(200)
        .end(done);
    });
    it('should return static html response', (done) => {
      request(app)
        .get('/help.html')
        .expect((res) => {
          expect(res.type).toBe('text/html');
        })
        .end(done);
    });
  });

  describe('GET /about', () => {
    it('should return response success (200)', (done) => {
      request(app)
        .get('/about')
        .expect(200)
        .end(done);
    });
    it('should return html response', (done) => {
      request(app)
        .get('/about')
        .expect((res) => {
          expect(res.type).toBe('text/html');
        })
        .end(done);
    });
  });
});


