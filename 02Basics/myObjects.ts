// const User = {
// 	name: "Yağmur",
// 	email: "test@gmail.com",
// 	isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "Yağmur", isPaid: false, email: "g@gmail.com" };

// // createUser({ name: "Yağmur", isPaid: false, email: "g@gmail.com" });
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
// 	return { name: "react", price: 123 };
// }

// type User = {
// 	name: string;
// 	email: string;
// 	isActive: boolean;
// };

// function createUser(user: User): User {
// 	return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
	readonly _id: string;
	name: string;
	email: string;
	isActive: boolean;
	credCardDetails?: number;
};

type cardNumber = {
	cardNumber: string;
};

type cardDate = {
	cardDate: string;
};

type cardDetails = cardNumber &
	cardDate & {
		cvv: number;
	};

let myUser: User = {
	_id: "1234",
	name: "yağ",
	email: "test@gm.com",
	isActive: false,
};

myUser.email = "dada@gmail.com";

export {};
