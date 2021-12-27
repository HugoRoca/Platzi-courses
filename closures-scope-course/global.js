var hello = 'hello'
var hello = 'hello +'
// solo var puede ser reasignada
let world = 'world'
const helloWorld = 'Hello world'

const anotherFunction = () => {
  console.log(hello, world, helloWorld)
}

anotherFunction()

// --
const anotherFunctionTwo = () => {
  globalVar = 'im global'
}

anotherFunctionTwo()

console.log(globalVar)

//--
const anotherFunctionThree = () => {
  var localVar = globalVar = 'other global'
}

anotherFunctionThree()
console.log(globalVar)