import express from "express";
import mysql from "mysql2";

const app = express();
const port = process.env.PORT || 4000;

// Parse DATABASE_URL provided by Render / Railway
const dbUrl = process.env.DATABASE_URL;
let connection;
if (dbUrl) {
  // mysql2 accepts connection URI directly
  connection = mysql.createConnection(dbUrl);
} else {
  // fallback — will error if no DB configured
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306
  });
}

app.get("/", (req, res) => {
  res.send("🎄 Christmas Decorations backend is live!");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
