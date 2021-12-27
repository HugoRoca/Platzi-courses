// ANTES
let text1 = "enter\n" + "enter"

// DESPUES
let text2 = `enter
enter`;

// DESTRUNCTURACIÓN
let params = {
  name: 'hugo',
  lastName: 'roca',
  age: 26,
}

let { name, lastName, age } = params

console.log(name, lastName, age)

// SPREAD
let array1 = ['oscar', 'hugo', ' ricardo']
let array2 = ['valeria', 'jesica']
let team = ['david', ...array1, ...array2]

console.log(team)