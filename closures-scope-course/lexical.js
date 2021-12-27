const buildCount = (i) => {
  let count = i
  const displayCount = () => {
    console.log(count++)
  }

  return displayCount
}

const myCount = buildCount(1)
myCount();
myCount();
myCount();
myCount();


const myCountTwo = buildCount(10)
myCountTwo();
myCountTwo();
myCountTwo();
myCountTwo();
