export class HomeMovie {
  constructor(data) {
    this.data = data;
  }
   render() {
    const dom = this.data.map(
      (item, index) =>
        `
        <div class="hi">
        <article>
          <h2>${item.category}</h2>
        </article>
        <div class="movies" id="slide_show_${index}">
            ${item.movies
              .map(
                (el) =>
                  `<div id="movie-no-${el.id}">
                    <a class="no-dec" href="./detail.html">
                        <div class="movie-img">
                          <div class="background_list" style="background:url(${
                            el.image
                          })">
                            
                      </div>
                  </div>
                </a>
              </div>`
              )
              .join("")}
          </div>
          <div class="slider_button_container">
          <span onclick="previous(${index})" class="previous_click"><</span>
          <span onclick="next(${index})" class="next_click">></span>
          </div>
          </div>
        `
    ).join("");
    return dom;
  }
}