

let videoTrailer = document.getElementById("video-trailer");
let playTrailer = document.getElementById("play-trailer");
let header = document.getElementById("header");
console.log(playTrailer);
videoTrailer.classList.add("js-none-display");

function onYouTubePlayerAPIReady() {
  player = new YT.Player('Youtube', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  playTrailer.addEventListener("click", function () {
    player.pauseVideo();
  });
}

function ShowOrHireTrailer() {
  if (videoTrailer.classList.contains("js-none-display"))
    {
      videoTrailer.classList.remove("js-none-display");
      videoTrailer.classList.add("js-block-display");
      header.style.marginBottom="0%";
      playTrailer.style.backgroundImage = "url(../img/close.svg)";
    }
    else
    {
      videoTrailer.classList.remove("js-block-display");
      videoTrailer.classList.add("js-none-display");
      header.style.marginBottom ="30%";
      playTrailer.style.backgroundImage = "url(../img/play.svg)";
      player.pauseVideo();
    }
}

playTrailer.addEventListener("click", ShowOrHireTrailer);