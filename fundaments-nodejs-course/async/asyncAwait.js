async function greeting(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hi ${name}`);
      resolve(name);
    }, 1000);
  });
}

async function talk() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla");
      resolve(true);
    }, 1000);
  });
}

async function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bye ${name}`);
      // reject("error");
      resolve(name);
    }, 1000);
  });
}

async function main() {
  console.log("Start process");
  let name = await greeting("Hugo");
  await talk();
  await talk();
  await talk();
  await talk();
  await bye(name);
  console.log("End process");
}

main();
