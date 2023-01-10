import express from "express";
import cors from "cors";
const app = express();
const port = 5002;

app.use(cors());


// BackEnd codiig module-chlah
const router = express.Router();

// MySql-tei haritsah package
import mysql from "mysql";
// Database-tei nolbolt hiine
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movie",
});


// Herew databaseei holbogdwol Doorhiig hewlene.
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Amjilttai holbogdloo");
});

app.get("/", (req, res) => {
  res.send("Hello worlddddd!");
});

app.listen(port, () => {
  console.log(`Server listening on port: http://localhost:${port}`);
});

/**
 * @swagger
 * register/:
 *   get:
 *    summary: Киног ангилах
 *    description: Ангилалаас сонгох үед сонгосон ангилалыг харуулах
 *    responses:
 *     200:
 *      description: амжилттай харууллаа
 *     500:
 *      description: серверийн алдаа гарлаа
 */

app.get("/all", (req, res) => {
  var sqlquery = "select distinct movie_list.* from category, movie_list , movie_name where category.cID = movie_name.ID and movie_name.mID = movie_list.mID order by movie_list.mID asc";
  var msg = [req.body];
  db.query(sqlquery, msg, (err, result) => {
    if (err) {
      throw err;
    } else {
      var all = [];
      var i = 0;
      for (const row of result) {
        var movielist = {};
            movielist.mID = row.mID;
            movielist.img = row.img;
            movielist.eps_num = row.eps_num;
            movielist.name = row.name;
            movielist.year = row.year;
            movielist.fav = row.fav;
            movielist.about = row.about;
        all[i++] = movielist;
      }
      res.send(all);
    }
  });
});

app.get("/family", (req, res) => {
  var sqlquery =
    "select distinct movie_list.* from category, movie_list, movie_name where category.cID = movie_name.ID and movie_name.mID = movie_list.mID and category.cName = 'family'";
  var msg = [req.body];
  db.query(sqlquery, msg, (err, result) => {
    var family = [];
    var i = 0;
    for (const row of result) {
      var movielist = {};
      movielist.mID = row.mID;
      movielist.img = row.img;
      movielist.eps_num = row.eps_num;
      movielist.name = row.name;
      movielist.year = row.year;
      movielist.fav = row.fav;
      movielist.about = row.about;
      family[i++] = movielist;
    }
    res.send(family);
  });
});


// module.exports = app;