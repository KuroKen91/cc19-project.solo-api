const express = require("express");
//const router = express.Router();
const knex = require("./knex");


const testServer = () => {
 const app = express();
 app.use(express.json());
 app.use(express.static('public'));

//Get ALL Data
app.get("/api/final_fantasy", async (req, res) => {
    try {
        const response = await knex.select().from('final_fantasy');
        res.status(200);
        res.send(response);
    } catch (e) {
        console.log("ERROR", e);
    }
});

//Get Data by Game
app.get("/api/final_fantasy/:title", async (req, res) => {
    const { game } = req.params;
    try {
        const response = await knex.select().from('final_fantasy').where({game}).first() ;
        res.status(200);
        res.send(response);
    } catch (e) {
        console.log("ERROR", e);
    }
});

//Update Game Data
app.patch('/api/final_fantasy/:id', async (req, res) => {
    const id = req.params.id
  
    try {
        await knex('final_fantasy').where('id', id).update(req.body)
        res.status(200);
        res.send(req.body);
    } catch (error) {
        console.log("ERROR", error)
        res.sendStatus(404);
    }
  });

  //Delete a row of a certain game's info
  app.delete('/api/final_fantasy/:id', async (req, res) => {
    const id = req.params.id;

    try {
        await knex('final_fantasy').where('id', id ).del();
        res.status(200).json(console.log("GAME & INFO DELETED"));
    } catch (err) {
        res.status(500).json({message: "Error updating new post", error: err})
    }
  });

  //Add a new row of game info
  app.post('/api/final_fantasy/new', async (req, res) => {
    try {
            await knex('final_fantasy').insert( req.body );
            res.status(200);
            res.send(req.body);

    } catch (err) {
        console.log("ERORR", err)
        res.status(500).end();
    }
  });
  return app;
}

const port = 9999|| process.env.PORT;
testServer().listen(9999, () => {
    console.log(`Server running at https://localhost:${port}`);
});


module.exports = { testServer }; 