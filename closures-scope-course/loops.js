// En un loop nunca uses var, siempre utiliza let para valores que irán
// cambiando dentro de la ejecución del scope.

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000);
  }
}

anotherFunction()
