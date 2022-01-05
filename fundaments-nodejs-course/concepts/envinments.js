let nameEnv = process.env.NAME_OTHER || "development";
let web = process.env.WEB || "nothing";

console.log(`Hello ${nameEnv}`);
console.log(`Your web ${web}`);

// NAME_OTHER=name node ...
// NAME_OTHER=name WEB=google.com node ...
