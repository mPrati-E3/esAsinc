"use strinct";

const sqlite = require("sqlite3");
const db = new sqlite.Database('exams.sqlite', (err) => {if (err) throw err;});


db.close();