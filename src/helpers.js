const INTERVAL = 20;
const MAX_VALUE = 30;

function generateNumber(min = 0, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateAnswers(correctAnswer) {
	const answers = [correctAnswer]; // [3,2]

	for (let i = 0; i < 3; i++) {
		const answer = generateNumber(correctAnswer - INTERVAL, correctAnswer + INTERVAL);
		if (answers.includes(answer)) {
			i--;
			continue;
		}
		answers.push(answer);
	}

	return answers.sort(() => Math.random() - 0.5);
}

function generateOperation() {
	const operations = ["+", "-", "*"];
	const randomIdx = generateNumber(0, operations.length - 1);

	return operations[randomIdx];
}

export function generateQuiz() {
	const number1 = generateNumber(0, MAX_VALUE);
	const number2 = generateNumber(0, MAX_VALUE);
	const operation = generateOperation();

	const correctAnswer = eval(`${number1} ${operation} ${number2}`);
	const answers = generateAnswers(correctAnswer);

	return {number1, number2, operation, correctAnswer, answers};
}


export function result(i,params) {
	let resultElm = document.querySelector(`.rounded-circl-${i}`)
	resultElm.innerHTML  = i
	if (params) resultElm.style.background = 'green'
	else if(params === false) resultElm.style.background = 'red'
	return resultElm
}