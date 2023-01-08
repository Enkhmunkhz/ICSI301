import { HomeMovie } from "../modules/homeMovie.js";

let main = document.getElementById("movie_container");
get_data();
async function get_data() {
  await fetch("https://api.jsonbin.io/v3/b/63b1a2ba01a72b59f23dd533")
    .then((res) => res.json())
    .then((data) =>
      main.insertAdjacentHTML(
        "beforeend",
        new HomeMovie(data.record.categories).render()
      )
    )
    .catch((err) => console.log(err, "gg"));
}
