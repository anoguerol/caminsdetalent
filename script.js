function cambiarImagen() {
    var imagen = document.getElementById("mainImage");
    if (imagen.src.endsWith("portada.jpg")) {
        imagen.src = "camins.jpg";
    } else {
        imagen.src = "portada.jpg";
    }
}