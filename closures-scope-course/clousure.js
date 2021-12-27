// convina una funcion y el ambito lexico

const moneyBox = (coins) => {
  var saveCoins = 0
  saveCoins += coins
  console.log(saveCoins)
}

moneyBox(1) // 1
moneyBox(2) // 2

// -----
const moneyBox = () => {
  var saveCoins = 0
  const countCoins = (coins) => {
    saveCoins += coins
    console.log('money box: $$', saveCoins)
  }
  return countCoins
}

let myMoneyBox = moneyBox()
myMoneyBox(5)
myMoneyBox(6)
myMoneyBox(10)

// -----
const father = () =>{
  var countSon = 0;
  const createSon = (newSon) =>{
      countSon += newSon;
      console.log(`count son = ${countSon}`)
  }
  return createSon;
}

let made = father();
made(1)
made(1)
made(1)
