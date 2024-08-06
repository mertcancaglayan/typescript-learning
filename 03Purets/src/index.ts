// class User {
// 	public email: string;
// 	private name: string;
// 	readonly city: string = "";
// 	constructor(email: string, name: string) {
// 		this.email = email;
// 		this.name = name;
// 	}
// }

class User {
	protected _courseCount = 1;

	readonly city: string = "";
	constructor(public email: string, public name: string) {}

	private deleteToken() {
		console.log("token deleted");
	}

	get getAppleEmail(): string {
		return `apple ${this.email}`;
	}

	get courseCount(): number {
		return this._courseCount;
	}

	set courseCount(courseNum) {
		if (courseNum <= 1) {
			throw new Error("Course Count should be more than 1");
		}
		this._courseCount = courseNum;
	}
}

class SubUser extends User {
	isFamily: boolean = true;
	changeCourseCount() {
		this._courseCount = 4;
	}
}

const mert = new User("mer@.com", "mert");
// mert.city = "Ist";
// mert.city;