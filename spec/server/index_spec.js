const app = require('../../server/index');
const request = require('supertest');

describe('index', () => {
    describe('GET /stats', () => {
        it('reports zero mails when none have been posted', (done) => {
            return request(app)
                .get('/stats')
                .expect(200)
                .expect((response) => {
                    expect(response.body.emailCount).toBe(0);
                })
                .end((error) => {
                    (error) ? done.fail(error) : done();
                });
        });    
    });

});