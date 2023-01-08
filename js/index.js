let position = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let index = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
async function previous(id) {
  current_item = document.getElementById(`slide_show_${id}`);
  let width = document.getElementsByClassName("movie-img")[0].clientWidth;
  if (index[id] > 0) {
    index[id]--;
    if (Math.abs(position[id]) !== 0) {
      position[id] += width;
      current_item.style.transform = "translateX(" + position[id] + "px)";
    }
  }
}
async function next(id) {
  current_item = document.getElementById(`slide_show_${id}`);
  let width = document.getElementsByClassName("movie-img")[0].clientWidth;
  let count = current_item.childNodes.length - 2;
  let carousel_width = current_item.clientWidth;
  if (
    Math.abs(position[id]) >
      carousel_width -
        current_item.clientWidth *
          (window.innerWidth / current_item.clientWidth) ||
    count < window.innerWidth / width
  ) {
  } else if (index[id] < count) {
    position[id] -= width;
    current_item.style.transform = "translateX(" + position[id] + "px)";
    index[id]++;
  }
}

async function show_dropdown() {
  let dropdown = document.getElementById("dropdown_content");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

async function show_dropdowns() {
  let dropdown = document.getElementById("dropdown_contents");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

async function shows_dropdown() {
  let dropdown = document.getElementById("dropdowns_content");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}