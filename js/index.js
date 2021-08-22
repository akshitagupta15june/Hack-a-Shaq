const buildQuiz = () => {
    //Stores html output
    let output = [];

    shaqQuestions.forEach((currentQuestion, questionNumber) => {
        //Will hold the answer choices
        var answers = [];

        //For each answer option makes label and input
        for(letterOption in currentQuestion.answers) {
            answers.push(`
                <label class="question_label main-text">
                    <input class="question_input" type="radio" name="question${questionNumber}" value="${letterOption}">
                    ${letterOption} : ${currentQuestion.answers[letterOption]}
                </label>`
            )
        };

        output.push(`
            <div class='slide'>
                <div class="question">

                    <p class="question_header sub-text">
                        Question <span class="question_header--number">${questionNumber + 1}</span> of ${shaqQuestions.length}
                    </p>

                    <h3 class="question_question med-text">
                        ${currentQuestion.question}
                    </h3>

                    <div class="answers"> ${answers.join('')} </div>
                </div>
            </div>`
        );

        quizContainer.innerHTML = output.join('');
    })
}

const displayResults = () => {
    let numberCorrect = 0;
    const answersContainer = document.querySelectorAll('.answers');

    shaqQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answersContainer[questionNumber];
        //Makes the selection of input based on question number cleaner
        const questionSelector = `input[name=question${questionNumber}]:checked`;
        //Puts users selected answer into variable
        const userAnswer = (answerContainer.querySelector(questionSelector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer) {
            numberCorrect++;

            answersContainer[questionNumber].style.color = "#06d6a0"
            answersContainer[questionNumber].style.fontWeight = "600"
        } else {
            answersContainer[questionNumber].style.color = "#f94144"
        }

        resultsContainer.innerHTML = `${numberCorrect} out of ${shaqQuestions.length} questions correct`;
    })
}

let showSlide = slideNumber => {
    slides[currentSlide].classList.remove('active_slide')
    slides[slideNumber].classList.add('active_slide');
    currentSlide = slideNumber;

    //Next slide business
    if(currentSlide === slides.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block'
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }

    //Previous slide Business
    if(currentSlide === 0) {
        previousBtn.style.display = 'none';
    } else {
        previousBtn.style.display = 'inline-block';
    }
}

//Functionality for the slides to change
let showNextSlide = () => {
    showSlide(currentSlide + 1);
}

let showPreviousSlide = ()=> {
    showSlide(currentSlide - 1);
}

//Quiz DOM stuff
const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results');
const submitBtn = document.querySelector('#submit');

//Shaq Quiz Questions
let shaqQuestions = [
    {
        question: 'Can Shaq make freethrows?',
        image: '/images/question1.jpg',
        answers: {
            A: 'No',
            B: 'Yes',
            C: 'Sometimes',
            D: 'Never'
        },
        correctAnswer: 'D'
    },
    {
        question: 'Is Michael Jordan the best NBA player?',
        questionNumber: '1',
        image: '/images/question1.jpg',
        answers: {
            A: 'Yes, Period.',
            B: 'No',
            C: 'Only in the 90s',
            D: 'They are all good. Lebron. Kobe.'
        },
        correctAnswer: 'A'
    }, 
]

//Builds quiz
buildQuiz();

//Grabs button stuff and slide stuff
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const slides = document.querySelectorAll('.slide');
let currentSlide =  0;

showSlide(currentSlide)

//Event Listeners
submitBtn.addEventListener('click', displayResults)
previousBtn.addEventListener("click", showPreviousSlide);
nextBtn.addEventListener("click", showNextSlide);