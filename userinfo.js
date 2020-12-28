var Name = sessionStorage.getItem("name");
var score = sessionStorage.getItem("score");

document.querySelector(".name").innerHTML = Name;
document.querySelector(".score").innerHTML = score;
