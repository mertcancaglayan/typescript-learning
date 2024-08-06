// const user: (string | number)[] = ["mrt", 1];

let tUser: [string, number, boolean];

tUser = ["mert", 2, false];
// tUser = [true, 2, "ad"];  it has to be in a specific order

let rgb: [number, number, number] = [222, 123, 321];

type User = [number, string];
const newUser: User = [2, "sad@gmail.com"];

newUser[1] = "ddd.com";
