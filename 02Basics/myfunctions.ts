function addTwo(num: number) {
	return num + 2;
	//return "hello";
}

function getUpper(value: string) {
	return value.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper("abc");

signUpUser("Mert", "test@gmail.com", false);
loginUser("Yağmur", "test@gmail.com");

// function getValue(myVal: number): boolean {
// 	if (myVal > 5) {
// 		return true;
// 	}
// 	return "200 OK";
// }

const getHello = (s: string): string => {
	return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

// we dont need to specify the type of the variable. Map method automaticly recognize it but we can still specift the return value type in this case its a string
heros.map((hero): string => {
	return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
	console.log(errmsg);
}

function handleError(errmsg: string): never {
	throw new Error(errmsg);
}

export {};
