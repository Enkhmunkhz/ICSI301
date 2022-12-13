import { RenderMovie } from "./renderMovie.js";
import { data } from "../datas/moviePageData";

let main = document.querySelector("kino_container");

const home_data = new RenderMovie(data);

const home_dom = home_data.render();

home_dom.forEach((item) => {
  main.insertAdjacentHTML("beforeend", item);
});
