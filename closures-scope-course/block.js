/*
El block scope gue algo que me rompió cuando lo aprendí, porque si no me equivoco, no hay más lenguajes que lo tengan jaja (o igual si) 
pero aún no los conozco

Para explicar un poco mejor qué fue lo que sucedió con el timeOut, al declarar con “var” la variable “i” dentro del for, 
lo que estamos haciendo es declarar una variable global llamada “i”, y con cada iteración del for estamos sobreescribiendo esa 
variable, el for del 1 al 10 se ejecuta en menos de un segundo, es decir, una computadora es rápida ejecutando código, pero el 
setTimeout se ejecutará después de un segundo, JavaScript NO se va a quedar esperando que cada setTimeout se ejecute, simplemente 
JavaScript va a ver que hay un setTimeout y lo va a poner en su cola de tareas (Ver el curso de asíncronismo con JavaScript y el 
  curso profesional de JavaScript para entender esto mejor), el caso es que, cuando pasa un segundo, los 10 setTimeouts que 
  JavaScript puso en cola (Uno por cada iteración) se ejecutan, y como “i” es una variable global que fue sobreescrita, 
  se quedo con el último valor de 10 (Porque aunque la condición del último ciclo no se cumplió, la variable si fue asignada 
    para poder evaluar la condición), y es por eso que todos los setTimeouts miran el valor de la variable y todos acaban obteniendo “10”, 
    con let, como saben, no se puede sobreescribir la variable, y tenemos un “let” diferente por cada iteración
     (Imaginen que cada iteración es un bloque de código totalmente diferente), entonces, cada setTimeout agarra el “let” que 
     está dentro de su propio bloque de código, y como es único gracias al scope, ahí si que se imprimen del 1 al 9:D!

*/

const fruits = () => {
  if (true) {
    var fruits1 = 'apple' // es accedido en todo el scope
    let fruits2 = 'banana' // se puede acceder solo en el bloque
    const fruits3 = 'kiwi' // se puede acceder solo en el bloque

    console.log(fruits2, fruits3)
  }

  console.log(fruits1)
}

fruits()

// -----
let x = 1
{
  let x = 2
  console.log(x) // 2
}
console.log(x) // 1

var x = 1
{
  var x = 2
  console.log(x) // 2
}
console.log(x) // 2

// -----
const anotherFunction = () => {
  // con var todo es el ultimo numero
  // con let se conserva por ser bloque
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000);
  }
}

anotherFunction()