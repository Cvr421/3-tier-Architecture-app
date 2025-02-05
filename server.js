express = require("express");

const cors = require("cors");
const { Pool } = require("pg"); // pg library is the official PostgreSQL client for Node.js
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());





// PostgreSQL Connection
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: 5432, 
});

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.get("/users", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});











app.use(cors());
app.use(express.json());









const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));