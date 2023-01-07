import { movieDetail } from "./movieDetail.js";

class FullMovieItems {
  constructor(movies) {
    this.id = movies.id;
    this.image = movies.image;
    this.filtera = movies.filtera;
    this.a = movies;
  }
  Render() {
    return `<div class="fullMovie">
      <a class="no_dec" href="./detail.html">
        <div class="movie-img-${this.id}">
          <div class="background_list" style="background:url(
            ${this.image}
          );">
          </div>
        </div>
      </a>
      <div class="movie-det">
          ${new movieDetail(this.a).Render()}
        </div>
    </div>`;
  }
}

export default class FullMovie {
  constructor(jsonUrl) {
    this.fullMovieList = [];
    this.jsonUrl = jsonUrl;
    
  }

  Download(targetElement) {
    fetch(`${this.jsonUrl}`)
    .then(result => 
      result.json()
        .then(jsob => {
          const filteredArray = jsob.record.filter(
            movie => movie.filtera === 'Нэг ангит'
          )
          console.log(filteredArray);
          if (filteredArray.length > 0) {
            gebi(targetElement).insertAdjacentHTML(
              "beforeend",
              filteredArray
                .map(newMovie => {
                  const _newMovie = new FullMovieItems(newMovie);
                  this.fullMovieList.push(_newMovie);
                  return _newMovie.Render();
                })
                .reduce((prevVal, curVal) => prevVal + curVal, " ")
            );
          }
        })
        )
  }
}

const gebi = id => document.getElementById(id);

