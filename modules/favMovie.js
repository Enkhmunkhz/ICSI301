import { movieDetail } from "./movieDetail.js";

class FavoMovieItems {
  constructor(favo) {
    this.id = favo.id;
    this.image = favo.image;
    this.filtera = favo.filtera;
    this.fav = favo.fav;
    this.a = favo;
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

export default class favoMovie {
  constructor(jsonUrl) {
    this.favoMovieList = [];
    this.jsonUrl = jsonUrl;
    
  }

  Download(targetElement) {
    fetch(`${this.jsonUrl}`)
    .then(result => 
      result.json()
        .then(jsob => {
          const filteredArray = jsob.record.filter(
            movie => movie.fav === 'true'
          )
          console.log(filteredArray);
          if (filteredArray.length > 0) {
            gebi(targetElement).insertAdjacentHTML(
              "beforeend",
              filteredArray
                .map(newFavo => {
                  const _newFavo = new FavoMovieItems(newFavo);
                  this.favoMovieList.push(_newFavo);
                  return _newFavo.Render();
                })
                .reduce((prevVal, curVal) => prevVal + curVal, " ")
            );
          }
        })
        )
  }
}

const gebi = id => document.getElementById(id);

