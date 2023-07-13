function removeOverlay() {
    var overlay = document.querySelector('.overlay');
    var music = document.getElementById('background-music');
    overlay.classList.add('hidden');
    music.play();
}