var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimage= "images/"+"dice"+ randomnumber1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimageq= "images/"+"dice"+ randomnumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimageq);


if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="🚩Player1 wins!";
}
else if(randomnumber2>randomnumber1){
  document.querySelector("h1").innerHTML="Player2 wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML="Draw";
}
