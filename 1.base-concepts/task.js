"use strict"

function solveEquation(a, b, c) {
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		let root = -b / (2 * a);
		return [root];
	} else {
		let sqrtDiscriminant = Math.sqrt(discriminant);
		let root1 = (-b + sqrtDiscriminant) / (2 * a);
		let root2 = (-b - sqrtDiscriminant) / (2 * a);
		return [root1, root2];
	}
}
}

