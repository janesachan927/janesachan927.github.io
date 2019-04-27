var Placer = document.getElementById("location");
var Horse = document.getElementById("horse");
var HorseClick = function(e) {
var Horn = document.getElementById("horn");
    Horn.style.top = e.clientY - 80 + "px";
    Horn.style.left = e.clientX - 80 + "px";
};
Horse.addEventListener("click", HorseClick);
