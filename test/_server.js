const chai = require('chai');
const chaiHttp = require('chai-http');
const { testServer } = require("../server");
//const ffdata = require('../server/data/games.json');

chai.use(chaiHttp);
chai.should();

describe('Testing Final_Fantasy Data Server', () => {
        let request;
        beforeEach(() => {
            request = chai.request(testServer())
        });
    describe('Get game data /final_fantasy', () => {
        it('should return all game data', async () => {
            const res = await request.get('/api/final_fantasy');
            console.log(res.text)
            res.should.have.status(200);
        });

    })
    describe('Should patch game name', () => {
        it('should change game name to "BEST ONE"', async () => {
            const res = await request.get
        })
    });
});