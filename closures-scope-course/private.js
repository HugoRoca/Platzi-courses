// Variables privadas con Closures: JS por su naturaleza no fomenta el uso de datos privados pero por medio de los Closures podemos crear valores que solo puedan ser accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.

const person = () => {
  var saveName = "Name"
  return {
    getName: () => saveName,
    setName: (name) => {
      saveName = name
    }
  }
}

newPerson = person()
console.log(newPerson.getName())
newPerson.setName('Hugo')
console.log(newPerson.getName())
