import { ShaqQuestions } from "./questions";
function quiz() {
    for (let i = 0; i < 10; i++) {
        getRandomQuestion(shaqQuestions);
    }
}
function getRandomQuestion(ShaqQuestions) {
    let i = Math.random() * (ShaqQuestions.length - 1) + 1;
    return ShaqQuestions[i];
}