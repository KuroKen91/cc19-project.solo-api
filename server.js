const express = require("express");
//const router = express.Router();
const knex = require("./knex");

//app.use(express.json());

const testServer = () => {
 const app = express();
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
app.get("/api/final_fantasy/:game", async (req, res) => {
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
app.patch('/api/final_fantasy/:game', async (req, res) => {
    const { game } = req.params;
    const changes = req.body;
  
    try {
        if (game) {
            const ids = await knex('final_fantasy').where( { game } ).update(changes);
            knex('final_fantasy').select();
            res.status(200).json(console.log("GAME NAME UPDATED"));
        } else {
            res.status(404).json(console.log("GAME NOT FOUND!!!"))
        }
    } catch (err) {
      res.status(500).json({message: "Error updating new post", error: err})
    }
  });

  //Delete a row of a certain game's info
  app.delete('/api/final_fantasy/:game', async (req, res) => {
    const { game } = req.params;

    try {
        if (game) {
            const ids = await knex('final_fantasy').where( { game } ).del();
            knex('final_fantasy').select();
            res.status(200).json(console.log("GAME & INFO DELETED"));
        } else {
            res.status(404).json(console.log("GAME NOT FOUND!!!"))
        }
    } catch (err) {
      res.status(500).json({message: "Error updating new post", error: err})
    }
  });

  //Add a new row of game info
  app.post('/api/final_fantasy', async (req, res) => {
    const { game } = req.params;
  
    try {
        if (game) {
            const ids = await knex('final_fantasy').where( { game } ).del();
            knex('final_fantasy').select();
            res.status(200).json(console.log("GAME & INFO DELETED"));
        } else {
            res.status(404).json(console.log("GAME NOT FOUND!!!"))
        }
    } catch (err) {
      res.status(500).json({message: "Error updating new post", error: err})
    }
  });
  return app;
}

const port = 9999|| process.env.PORT;
testServer().listen(9999, () => {
    console.log(`Server running at https://localhost:${port}`);
});


module.exports = { testServer }; 