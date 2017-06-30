const frisby = require('frisby');
const url = 'http://localhost:3000';

describe('POST /email', () => {
    it('causes stats to increment', (done) => {
        frisby.get(url + '/stats').
            expect('status', 200).
            then((response) => {
                expect(response._body.emailCount).toBe(0);
            }).
            then(() => frisby.post(url + '/email').
                expect('status', 200).
                then(() => frisby.get(url + '/stats').
                    expect('status', 200).
                    then((response) => {
                        expect(response._body.emailCount).toBe(1);
                    }))).
            done(done);
    });
});
