import { movie } from "./movie.js";

export class information {
  // constructor(name, fav, year, eps_num, detail) {
    // this.name = name;
    // this.fav = fav;
    // this.year = year;
    // this.eps_num = eps_num;
    // this.detail = detail;    
  // }

  constructor(data) {
    this.categories = data;
  }
  render() {
    return this.categories
      .map(
        (item, i) =>
          `
            <div>
            <div class="movies">
            ${item.movies
                .map((el) => {
                  return new movie(el).render();
                })
                .join("")}
            </div> 
              <div>
            <div class="head_movie">
                <h3>${item.name}</h3>
                <div class = "heart">
                if(${item.fav == "true"}){
                    <img src="../images/heart_full.svg" alt="fav"/>
                }
                else{
                    <img src="../images/heart_empty.svg" alt="fav"/>
                }
                </div>
            </div>
            <div class="body_movie">
                <h3>${item.year} | ${item.eps_num} анги </h3>
            <div>
            <div class="footer_movie">
                <h4>${item.detail}</h4>
            </div>
        </div>
          `
      )
      .join("").catch(e => console.log(e));
  }
}
