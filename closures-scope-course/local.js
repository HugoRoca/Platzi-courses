const helloWorld = () => {
  const hello = 'Hello world'
  console.log(hello)
}

helloWorld()

// ----- ambito lexico: El intérprete de JavaScript funciona desde el ámbito de ejecución actual y funciona hasta encontrar la variable en cuestión. Si la variable no se encuentra en ningún ámbito, se genera una excepción.
// Este tipo de búsqueda se llama ámbito léxico. El alcance de una variable se define por su ubicación dentro del código fuente, y las funciones anidadas tienen acceso a las variables declaradas en su alcance externo. No importa de dónde se llame una función, o incluso cómo se llama, su alcance léxico depende solo de dónde se declaró la función.
var scope = 'global'

const functionScope = () => {
  var scope = 'local'
  const func = () => scope
  console.log(func())
}

functionScope()
console.log(scope)

