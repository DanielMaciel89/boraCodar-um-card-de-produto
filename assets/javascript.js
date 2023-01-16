var sofaGira = document.getElementById("sofa");
var sofa360 = document.getElementById("giro360On");
var giro360 = document.getElementById("giro360");
var stop = document.getElementById("pararGiro");
function girar360() {
  sofaGira = document.getElementById("sofa").style.display = "none";
  giro360 = document.getElementById("giro360").style.display = "none";
  sofa360 = document.getElementById("giro360On").style.display = "inline-block";
  stop = document.getElementById("pararGiro").style.display = "inline";
}
function paraGiro() {
  stop = document.getElementById("pararGiro").style.display = "none";
  giro360 = document.getElementById("giro360").style.display = "inline";
  sofaGira = document.getElementById("sofa").style.display = "inline";
  sofa360 = document.getElementById("giro360On").style.display = "none";
}

//achei essa parte na internet não estava conseguindo retirar o daley na troca de imagem
var imagemURLs = [
  "assets/sofa.svg",
  "assets/sofagira.gif",
  "assets/360.svg",
  "assets/x.svg",
];
imagemURLs.forEach(function (imagemURL, indice) {
  new Image().src = imagemURL;
});
