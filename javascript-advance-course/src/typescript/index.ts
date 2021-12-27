// Boolean
let muted: boolean = true;

// numbers
let number: number = 42;

// arrays
let people: string[] = [];
people = ["hugo", "candy", "cut"];

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers = ["candy", 1, 3, "hugo"];

// enum
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

let colorFavorite: Color = Color.Red;
console.log(`My favorite color is ${colorFavorite}`);

// any
let other: any = "Joker";
other = { type: "string" };

// object
let obj: object = {};
obj = { type: "object" };

// function
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);

function createdAdder(a: number): (number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addFor = createdAdder(4);
const fourAddSix = addFor(6);

console.log(`functions ${fourAddSix}`);

// optional params
function fullName(firstName: string, lastName: string = "Rock"): string {
  return `${firstName} ${lastName}`;
}

const hugo = fullName("Hugo");
console.log(hugo);

// interfaces
interface Rectangle {
  with: number;
  height: number;
  color?: Color;
}

function area(r: Rectangle): number {
  return r.with * r.height;
}

let rect: Rectangle = {
  with: 4,
  height: 10,
  color: Color.Blue,
};

const areaRect = area(rect);
console.log(`area rectangle ${areaRect}`);

rect.toString = function () {
  return this.color ? `A ${this.color} rectangle` : `A rectangle`;
};

console.log(rect.toString());
