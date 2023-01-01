import { RenderHome } from "./renderHome.js";

let main = document.getElementById("movie_container");
await fetch("https://api.jsonbin.io/v3/b/63b15ac7dfc68e59d575669a")
  .then((res) => res.json())
  .then((data) =>
    main.insertAdjacentHTML(
      "beforeend",
      new RenderHome(data.record.categories).render()
    )
  )
  .catch((err) => console.log(err, "gg"));
