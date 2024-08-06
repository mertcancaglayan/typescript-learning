const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
	return val;
}

function identityTwo(value: any): any {
	return value;
}

function identityThree<Type>(val: Type): Type {
	return val;
}

identityThree(3);
identityThree("Mert");
identityThree(true);

function identityFour<T>(val: T): T {
	return val;
}

interface Bottle {
	brand: string;
	type: number;
}

identityFour<Bottle>({ brand: "ak", type: 3 });

function getSearchProducts<T>(products: T[]): T {
	const myIndex = 3;
	return products[myIndex];
}

const getMoreProducts = <T>(products: T[]): T => {
	const myIndex = 4;
	return products[4];
};

interface Database {
	connection: string;
	username: string;
	password: string;
}

function anotherFunction<T, U extends Database>(val1: T, val2: U): object {
	return { val1, val2 };
}

anotherFunction(3, { connection: "cal", username: "adad", password: "asdlkşa" });

interface Quiz {
	name: string;
	type: string;
}

interface Course {
	name: string;
	author: string;
	subject: string;
}

class Sellable<T> {
	public cart: T[] = [];

	addToCart(product: T) {
		this.cart.push(product);
	}
}
