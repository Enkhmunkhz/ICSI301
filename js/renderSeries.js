import SeriesMovie from "../modules/seriesMovie.js";
//const seriesMovie = new SeriesMovie("https://api.jsonbin.io/v3/b/63bb026c01a72b59f2455584");

const requestMovieData = async (category, query) => {
    const response = await fetch(`http://127.0.0.1:5002/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const books = await response.json();
    console.log(books);
    return books;
  };

document.addEventListener("DOMContentLoaded", async () => {
    const result = await requestMovieData();
    console.log(result, "okee");
    main.insertAdjacentHTML(
      "beforeend",
      new SeriesMovie(result).Render()
    );
    });

// seriesMovie.Download("main");