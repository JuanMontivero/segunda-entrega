function Libro(titulo, autor, añoPublicacion) {
  this.titulo = titulo;
  this.autor = autor;
  this.añoPublicacion = añoPublicacion;
}

let biblioteca = [];

function agregarLibro() {
  let titulo = prompt("Ingresa el título del libro:");
  let autor = prompt("Ingresa el autor del libro:");
  let añoPublicacion = prompt("Ingresa el año de publicación del libro:");

  let nuevoLibro = new Libro(titulo, autor, añoPublicacion);
  biblioteca.push(nuevoLibro);
}

function mostrarLibros() {
  let mensaje = "Los libros en la biblioteca son:\n";
  biblioteca.forEach(function(libro) {
    mensaje += libro.titulo + " por " + libro.autor + ", publicado en " + libro.añoPublicacion + "\n";
  });
  alert(mensaje);
}

let libro1 = new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", 1997);
let libro2 = new Libro("El Señor de los Anillos", "J.R.R. Tolkien", 1954);
biblioteca.push(libro1);
biblioteca.push(libro2);