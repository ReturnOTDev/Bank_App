const info = document.querySelectorAll(".info");
const overlay = document.getElementById("overlay");
info.forEach(inf => {
	inf.addEventListener("click", () => {
		overlay.classList.toggle("overlay-show");
	});
});
