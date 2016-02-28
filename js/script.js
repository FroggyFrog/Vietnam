function middle() {
  var w = window.innerWidth;
  if (w < 1252) {
    document.getElementById("sidejump").className = "blank";
    document.getElementById("mainjump").className = "normal";
  }
  if (w > 1252){
    document.getElementById("sidejump").className = "normal";
    document.getElementById("mainjump").className = "blank";
  }
}
window.addEventListener('resize', function(event){
  var w = window.innerWidth;
  if (w < 1252) {
    document.getElementById("sidejump").className = "blank";
    document.getElementById("mainjump").className = "normal";
  }
  if (w > 1252){
    document.getElementById("sidejump").className = "normal";
    document.getElementById("mainjump").className = "blank";
  }
});
