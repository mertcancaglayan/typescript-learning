let score: number | string = 33;
score = 55;
score = "55";

type User = {
	name: string;
	id: number;
};

type Admin = {
	username: string;
	id: number;
};

let mert: User | Admin = { name: "mert", id: 33 };

mert = { username: "can", id: 334 };

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
	if (typeof id === "string") {
		id.toLowerCase();
	} else if (typeof id === "number") {
		id + 2;
	}

	console.log(`db id is ${id}`);
}

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = [1, 2, "3", false];


let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"


export {};
