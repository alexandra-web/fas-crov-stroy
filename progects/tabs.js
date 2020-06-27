
function openProgect(evt, progectName) {
  let i, progects, swith;
  progects = document.getElementsByClassName("progects");
  for (i = 0; i < progects.length; i++) {
    progects[i].style.display = "none";
  }
  swith = document.getElementsByClassName("swith");
  for (i = 0; i < swith.length; i++) {
    swith[i].className = swith[i].className.replace(" active", "");
  }
  document.getElementById(progectName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

