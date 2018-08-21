window.addEventListener('keydown', function(ev) {
    document.getElementById("display_key").innerHTML = ev.key;
});
window.addEventListener('keyup', function(ev) {
    document.getElementById("display_key").innerHTML = "Press and hold any key";
});