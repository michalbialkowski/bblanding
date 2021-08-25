var media = document.querySelector('video');

replay.addEventListener("click",function() {
	replay.style.opacity = 0;
	media.currentTime = 0;
	media.play();
});

media.addEventListener("ended", function () {
	replay.style.opacity = 1;
});

