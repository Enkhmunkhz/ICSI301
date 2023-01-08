import { movieDetail } from "./movieDetail.js";

class SeriesMovieItems {
  constructor(movies) {
    this.image = movies.image;
    this.filtera = movies.filtera;
    this.a = movies;
  }
  Render() {
    return `<div class="fullMovie">
      <a class="no_dec" href="./detail.html">
        <div class="movie-img">
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

export default class SeriesMovie {
  constructor(jsonUrl) {
    this.seriesMovieList = [];
    this.jsonUrl = jsonUrl;
    
  }

  Download(targetElement) {
    fetch(`${this.jsonUrl}`)
    .then(result => 
      result.json()
        .then(jsob => {
          const filteredArray = jsob.record.filter(
            movie => movie.filtera === 'Олон ангит'
          )
          console.log(filteredArray);
          if (filteredArray.length > 0) {
            gebi(targetElement).insertAdjacentHTML(
              "beforeend",
              filteredArray
                .map(newSeries => {
                  const _newSeries = new SeriesMovieItems(newSeries);
                  this.seriesMovieList.push(_newSeries);
                  return _newSeries.Render();
                })
                .reduce((prevVal, curVal) => prevVal + curVal, " ")
            );
          }
        })
        )
  }
}

const gebi = id => document.getElementById(id);

