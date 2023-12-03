import { readFile } from "node:fs/promises";

const input = await readFile("input.txt", "utf8");
const lines = input.split("\n");

const values = [];

for (const line of lines) {
	const digits = [];

	for (const char of line) {
		const num = Number(char);
		if(!isNaN(num)) digits.push(num);
	}

	if(digits.length < 2) continue;

	const start = digits[0];
	const end = digits[digits.length - 1];

	values.push(Number(`${start}${end}`));
}

console.log(values.reduce((a, b) => a + b));
