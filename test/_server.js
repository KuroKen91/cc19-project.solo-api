const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const { testServer } = require("../server");
//const ffdata = require('../server/client/games.json');

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
            res.should.have.status(200);
        });

    })
    describe('Should patch game name', () => {
        it('should change game name to "BEST ONE"', async () => {
            const res = await request
                .patch("/api/final_fantasy/10")
                .send({title: "BEST ONE"});
        
            expect(res).to.have.status(200);
            //expect(res).to.not.include("Final Fantasy 10");
        })
    });
    describe('Should POST new info', () => {
        it('should post new game info', async() => {
            const res = await request
            .post("/api/final_fantasy/new")
            .send({title: "idk fantasy", picture: "idk.jpeg", platform:"idk", releasedate:"1988-12-16T15:00:00.000Z"})

            res.should.have.status(200);
        })
    })
});