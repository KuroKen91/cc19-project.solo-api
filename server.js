const express = require("express");
const knex = require("./knex");
const app = express();
app.use(express.json());

app.get("/api/notes", async (_, res) => {
    try {
        const response = await knex.select().from('notes');
        res.status(200);
        res.send(response);
    } catch (e) {
        console.log("ERROR", e);
    }
});

const port = 9999 || process.env.PORT;
app.listen(9999, () => {
    console.log(`🎉 Server running at https://localhost:${port}!`);
});