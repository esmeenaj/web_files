let days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
let prevday;


for(i=0; i<document.getElementsByClassName("tabs").length; i++){
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + day[i] + "</h2>";
  document.getElementsByClassName("day")[i].id= day[i];

  document.getElementsByClassName("day")[i].addEventListener('click',setActive, false);
}

  document.getElementById("thursday").classList.toggle('active');

function setActive(e){

  prevday=document.getElementsByClassName("active")[0].id;
  if(prevday !=undefined){
    document.getElementById("prevday").classList.remove("active");
    document.getElementById(prevday + "day").style.display ="none";
  }
  function seeThursday(){
  document.getElementById("day").innerHTML = "Thursday";
  document.getElementById("line1").innerHTML = "Make some breakfast";
  document.getElementById("line2").innerHTML = "Dress in a cute outfit";
  document.getElementById("line3").innerHTML = "Go out to dinner";
  }
  var thursdayButton = document.getElementById("thursday");
  thursdayButton.addEventListener("click", seeThursday, false);


  function seeMonday(){
  document.getElementById("day").innerHTML = "Monday";
  document.getElementById("line1").innerHTML = "Go on a 30-45 min walk";
  document.getElementById("line2").innerHTML = "Listen to a podcast";
  document.getElementById("line3").innerHTML = "Cook something tasty";
  }
  var mondayButton = document.getElementById("monday");
  mondayButton.addEventListener("click", seeMonday, false);
}
