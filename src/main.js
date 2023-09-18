import { generateQuiz,result } from "./helpers.js";

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const operation = document.getElementById("operation");
const answers = document.querySelector(".answers");
const results = document.querySelector('.result')
const elms =  []

// HANDLE FUNCTIONS
function handleAnswer(e) {}

// UI FUNCTIONS
function renderQuiz(quiz) {
	answers.innerHTML = "";
	// render quiz
	number1.innerText = quiz.number1;
	number2.innerText = quiz.number2;
	operation.innerText = quiz.operation;

	// render answers
	for (let i = 0; i < quiz.answers.length; i++) {
		const answer = quiz.answers[i];
		const answerElm = document.createElement("div");
		answerElm.className = "btn btn-outline-success";
		answerElm.innerText = answer;

		answerElm.onclick = () => {
			if (answer === quiz.correctAnswer) {
			elms.push(true)
				answerElm.classList.replace("btn-outline-success", "btn-success");
				setTimeout(init, 1000);
			} else {
				elms.push(false)
				answerElm.classList.replace("btn-outline-success", "btn-danger");
				setTimeout(init, 2000);

			}

		for (let j = 0; i < 10; j++) {

			let s = result(j + 1,elms[j])
			console.log(elms[j]);
}

		}
		answers.appendChild(answerElm);
	}
}


// LOGIC FUNCTIONS

function init() {
	const quiz = generateQuiz();
	renderQuiz(quiz);
	// if (elms.length === 10) {break}

}

init();
