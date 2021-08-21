import shaqQuestions from './questions'

const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results');
const submitButton = document.querySelector('#submit');

function buildQuiz() {
    let output = [];

    shaqQuestions.forEach((currentQuestion, questionNumber) => {
        let answers = [];

        for(answer in currentQuestion.answers) {
            answers.push(
                `<label class="question_label main-text">
                    <input class="question_input" type="radio" name="question${questionNumber}" value="A">
                        ${answer} : ${currentQuestion.answers[answer]}
                </label>`
            )
        }
    })
}
function postResults() {}

buildQuiz();
submitButton.addEventListener('click', postResults)
