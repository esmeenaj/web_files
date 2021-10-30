console.log("hello world");
console.log(Math.random(3));

const images = ["indianfood.jpg", "sushi.jpg", "pasta.jpg"];
const title = ["indian food","sushi", "pasta"];

for(i=0;i<document.getElementsbyClassName('options').length;i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];
  console.log(document.getElementsByClassName("options")[i].innerHTML);
  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/'+ images[i] + '">';
}
