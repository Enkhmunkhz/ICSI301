import { movieDetail } from "./movieDetail.js";

class SeriesMovieItems {
  constructor(movies) {
    this.image = movies.img;
    this.filtera = movies.filtera;
    this.a = movies;
  }
  
}

export default class SeriesMovie {
  constructor(jsonUrl) {
    this.seriesMovieList = [];
    this.jsonUrl = jsonUrl;
    console.log(this.jsonUrl[0].img," baaba");
  }

  // Download(targetElement) {
  //   fetch(`${this.jsonUrl}`)
  //   .then(result => 
  //     result.json()
  //       .then(jsob => {
  //         const filteredArray = jsob.record.filter(
  //           movie => movie.filtera === 'Олон ангит'
  //         )
  //         console.log(filteredArray);
  //         if (filteredArray.length > 0) {
  //           gebi(targetElement).insertAdjacentHTML(
  //             "beforeend",
  //             filteredArray
  //               .map(newSeries => {
  //                 const _newSeries = new SeriesMovieItems(newSeries);
  //                 this.seriesMovieList.push(_newSeries);
  //                 return _newSeries.Render();
  //               })
  //               .reduce((prevVal, curVal) => prevVal + curVal, " ")
  //           );
  //         }
  //       })
  //       )
 // }
  Render() {
 
    return `<div class="fullMovie">
      <a class="no_dec" href="./detail.html">
        <div class="movie-img">
          <div class="background_list" style="background:url(
            ${this.jsonUrl[0].img}
          );">
          </div>
        </div>
      </a>
      <div class="movie-det">
          ${new movieDetail(this.jsonUrl[0]).Render()}
        </div>
    </div>`;
  }
}

const gebi = id => document.getElementById(id);

