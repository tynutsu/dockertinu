'use strict';
const config = require('../config');
const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('home page', () => {
    it('should successfully load', (done) => {
        chai.request(`http://localhost:${config.port}`)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.contain('Hello Azure Docker');
                done();
            });
    });
});