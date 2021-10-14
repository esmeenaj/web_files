const quotes = ["I relax, I let go, my life is in perfect flow", "Bring good energy everywhere you go", "Don't be hard on yourself today", "Whatever is good for your soul, do that"];
let quotecount = 0;

document.getElementById("newquote").addEventListener("click", buttonClicked);

function buttonClicked(){
  console.log(quotes[quotecount]);
  document.getElementById("qtext").innerHTML = quotes[quotecount];
  if(quotecount>=3){
    quotecount = 0;
  }else{
    quotecount++;
  }
}
