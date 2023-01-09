export class movieDetail{
    constructor(movie){
        this.eps_num = movie.eps_num;
        this.name = movie.name;
        this.year = movie.year;
        this.fav = movie.fav;
        this.detail = movie.about;
        this.type = movie.type;
    }

    Render(){
        return `<div class="movie-detail">
            <div class="movie-head">
                <p class="movie-title"><i>${this.name}</i>  </p>
                ${this.fav === "false" ?
                    `<img class="movie-image" src="../images/heart_empty.svg">` :
                       ` <img class="movie-image" src="../images/heart_full.svg">`
                }
            </div>
            <div class="movie-mid">
                <p class="movie-year">${this.year} | ${this.eps_num} анги</p><br>
                <p class="movie-about">${this.detail} </p>
            </div>
            <div class="movie-footer">
                
                <div class="types">
                ${this?.type
                ?.map(
                  (element) =>
                    `<span class="element">${element}</span>`
                )
                .join(" ")}
                <add-list></add-list>
            </div>
            </div>
        </div>`;
    }
}