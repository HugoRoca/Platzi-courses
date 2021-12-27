// funcion especial que devuelve valores segun el algoritmo definido
function* helloWorld() {
  if (true) {
    yield 'hello'
  }

  if (true) {
    yield 'world'
  }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value) // hello
console.log(generatorHello.next().value) // world

console.log(generatorHello.next().value) // undefined