export class movie {
  // constructor(image, type) {
  //   this.image = image;
  //   this.type = type;
  // }
  constructor(movies) {
    this.movies = movies;
  }
  render() {
    return `<div class="movies" id="slide_show_${index}">
    ${item.movies
      .map(
        (el) =>  
          `<div id="movie-no-${el.id}">
            <a class="no-dec" href="./detail.html">
                <div class="movie-img">
                  <div class="background_list" style="background:url(${
                    el.image
                  })">
                    <div class="types">
                      ${el?.type
                        ?.map(
                          (element) => `<span class="element">${element}</span>`
                        )
                        .join(" ")}
                </div>
              </div>
          </div>
        </a>
      </div>`
      )
      .join("")}
  </div>
  `;
  }
}
