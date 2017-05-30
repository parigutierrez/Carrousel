/*jQuery(document).ready(function(){
  alert("soy una aletra con jQuery");
});
*/
/*
var imagenUno = document.getElementById("dos");
var imagenDos = document.getElementById("uno");
function mostrarDos(){
imagenUno.style.display="block";
imagenDos.style.display="none";
}
a.addEventListener("click", mostrarDos);
*/

$(document).ready(function(){

  $("#a").click(function () {
      $(".slide").hide(0);
      $("#uno").show(0);
  });

  $("#b").click(function () {
      $(".slide").hide(0);
      $("#dos").show(0);
  });

  $("#c").click(function () {
      $(".slide").hide(0);
      $("#tres").show(0);
  });

  $("#d").click(function () {
      $(".slide").hide(0);
      $("#cuatro").show(0);
  });

  $("#e").click(function () {
      $(".slide").hide(0);
      $("#cinco").show(0);
  });
});
