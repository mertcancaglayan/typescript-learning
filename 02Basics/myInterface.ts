interface User {
	readonly dbID: number;
	email: string;
	userId: number;
	googleId?: string;
	// startTrail: () => string;
	startTrail(): string;
	getCoupan(couponname: string, value: number): number;
}

interface User {
	githubToken: string;
}

interface Admin extends User {
	role: "admin" | "ta" | "learner";
}

const mert: User = {
	dbID: 22,
	email: "adad",
	userId: 123,
	startTrail: () => {
		return "trailer started";
	},
	getCoupan: (name: "merts coupon", off: 55) => {
		return 15;
	},
	githubToken: "github",
};

mert.email = "m@m.com";
// mert.dbID = 55
