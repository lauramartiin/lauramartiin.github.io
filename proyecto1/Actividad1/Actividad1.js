function cambiarColor(parrafo) {
  // Comprobar si el párrafo ya tiene la clase 'miestilo'
  var pClass = parrafo.getAttribute("class");

  if (pClass === "miestilo") {
    // Si tiene la clase, eliminarla y quitar el subrayado y color
    parrafo.removeAttribute("class","miestilo");
    parrafo.style.textDecoration = "none";

  } else {
    // Si no tiene la clase, reseteamos los demás párrafos
    reseteaParrafos();

    // Añadimos la clase 'miestilo' y aplicamos el estilo deseado
    parrafo.setAttribute("class", "miestilo");
    parrafo.style.textDecoration = "underline";

  }
}

function reseteaParrafos(){
  var parrafos = document.querySelectorAll("p");
  for (var i: number = 0; i < parrafos.length; i++) {
    parrafos[i].removeAttribute("class");
    parrafos[i].style.textDecoration = "none"; // Quitar subrayado
  }
}
