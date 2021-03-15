function mostrar() {
  document.getElementById("sidebar").style.width = "300px";
  document.getElementById("contenido").style.marginLeft = "300px";
  document.getElementById("abrir").style.display = "none";
  document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("contenido").style.marginLeft = "0";
  document.getElementById("abrir").style.display = "inline";
  document.getElementById("cerrar").style.display = "none";

}
/* ------------------------------------------log in */

$("#login-button").click(function () {
  $("#login-button").fadeOut("slow", function () {
    $("#container").fadeIn();
    TweenMax.from("#container", 0.4, { scale: 0, ease: Sine.easeInOut });
    TweenMax.to("#container", 0.4, { scale: 1, ease: Sine.easeInOut });
  });
});

$(".close-btn").click(function () {
  TweenMax.from("#container", 0.4, { scale: 1, ease: Sine.easeInOut });
  TweenMax.to("#container", 0.4, {
    left: "0px",
    scale: 0,
    ease: Sine.easeInOut
  });
  $("#container, #forgotten-container").fadeOut(800, function () {
    $("#login-button").fadeIn(800);
  });
});

/* Forgotten Password */
$("#forgotten").click(function () {
  $("#container").fadeOut(function () {
    $("#forgotten-container").fadeIn();
  });
});
