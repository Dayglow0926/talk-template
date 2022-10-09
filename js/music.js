const singer = document.querySelectorAll(".singer-component__column");
const singer_arr = Array.from(singer);

function checkSinger(event) {
  event.preventDefault();
  const index = singer_arr.indexOf(this);
  const music_list = document.querySelector(
    `.music-content__singer-song-list:nth-child(${index + 1})`
  );

  this.classList.toggle("select");
  music_list.classList.toggle("select");
}

singer.forEach((element) => {
  element.addEventListener("click", checkSinger);
});
