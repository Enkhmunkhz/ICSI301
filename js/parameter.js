import FullMovie from "../modules/fullMovie.js";

const movieAll = new FullMovie("https://api.jsonbin.io/v3/b/63bb026c01a72b59f2455584");
const movie2022 = new FullMovie("https://api.jsonbin.io/v3/b/63ba790501a72b59f244e960");
const movie2021 = new FullMovie("https://api.jsonbin.io/v3/b/63ba7a0415ab31599e309dad");
const movie2020 = new FullMovie("https://api.jsonbin.io/v3/b/63ba7a6915ab31599e309dfe");
const movie2019 = new FullMovie("https://api.jsonbin.io/v3/b/63ba7aecdfc68e59d57ca1e8");
const movie2018 = new FullMovie("https://api.jsonbin.io/v3/b/63ba7b2c01a72b59f244eb07");
const movie2017 = new FullMovie("https://api.jsonbin.io/v3/b/63ba7b7f15ab31599e309ed8");
const movieOthers = new FullMovie("https://api.jsonbin.io/v3/b/63ba7cfd01a72b59f244ec63");

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("year");

getCategoryData(myParam);

// let req = new XMLHttpRequest();
// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);;
//   }
// };

// req.open("GET", "https://api.jsonbin.io/v3/b/63a2f49f15ab31599e21ce14/latest", true);
// req.setRequestHeader("X-Master-Key", "$2b$10$ANnvIXALFqAYrb8Gwrum0.6JvSyaP7M7BEeZ8hg7UPJGzBOlkNQJi");
// req.send();

export default function getCategoryData(myParam) {
  switch (myParam) {
    case "all":
      movieAll.Download("main");
      console.log(myParam);
      break;
    case "2022":
      movie2022.Download("main");
      console.log(myParam);
      break;
    case "2021":
      movie2021.Download("main");
      console.log(myParam);
      break;
    case "2020":
      movie2020.Download("main");
      console.log(myParam);
      break;
    case "2019":
      movie2019.Download("main");
      console.log(myParam);
      break;
    case "2018":
      movie2018.Download("main");
      console.log(myParam);
      break;
    case "2017":
      movie2017.Download("main");
      console.log(myParam);
      break;
    case "others":
      movieOthers.Download("main");
      console.log(myParam);
      break;
    default:
      movieAll.Download("main");
      break;
  }
}