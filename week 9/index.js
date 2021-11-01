let days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
let prevday = 1;

let dayindex1;
let prevday1 = 1;

for(i=0; i<document.getElementsByClassName("tabs").length; i++){
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + day[i] + "</h2>";
  document.getElementsByClassName("day")[i].id= day[i];
}
for(i=0; i<document.getElementsByTagName("button").length; i++){
  document.getElementsByTagName("button")[i].addEventListener('click',setActive, false);
}


  document.getElementById("thursday").classList.toggle('active');

function setActive(e){
console.log("buttonClicked");
console.log(e.target.id);
console.log(days.indexOf(e.target.id));
var dayindex= days.indexOf(e.target.id);
dayindex = dayindex + 1;
if (dayindex !=prevday) {
  if (dayindex == 1|| dayindex ==2 || dayindex == 4){
    dayindex1 = dayindex;
    document.getElementById("schedule" + dayindex1).style.display = "block";
    document.getElementById("schedule" + prevday1).style.display = "none";
    prevday1 = dayindex1;
  }
  else {
    dayindex1 = 3;
    if (dayindex1 != prevday1){
    document.getElementById("schedule" + dayindex1).style.display = "block";
    document.getElementById("schedule" + prevday1).style.display = "none";
    }
    prevday1 = dayindex1;
  }
  document.getElementById("day" + dayindex).style.display ="block";
  document.getElementById("day" + prevday).style.display ="none";
}
prevday = dayindex;
}
