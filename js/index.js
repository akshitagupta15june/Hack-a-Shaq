const buildQuiz = () => {
    //Stores html output
    let output = [];

    shaqQuestions.forEach((currentQuestion, questionNumber) => {
        //Will hold the answer choices
        var answers = [];

        //For each answer option makes label and input
        for(letterOption in currentQuestion.answers) {
            answers.push(`
                <input class="question_input" type="radio" id="${questionNumber}_${letterOption}" name="question${questionNumber}" value="${letterOption}">
                <label for="${questionNumber}_${letterOption}" class="question_label main-text">
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

                    <img class="question_img" src="${currentQuestion.image}">
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
var shaqQuestions = [
    {
        question: 'Can Shaq make freethrows?',
        questionNumber: '1',
        image: '../images/question1.jpg',
        answers: {
            A: 'No',
            B: 'Yes',
            C: 'Sometimes',
            D: 'Never'
        },
        correctAnswer: 'D'
    },
    {
        question: 'What NBA legend was known as the Big Fundamental?',
        questionNumber: '2',
        image: '../images/q2.png',
        answers: {
            A: 'Tim Duncan',
            B: 'Kevin Durant',
            C: 'Stephen Curry',
            D: 'None'
        },
        correctAnswer: 'A'
    },
    {
        question: 'Which NBA player got memed to death after this crying photo was taken of him?',
        questionNumber: '3',
        image: '../images/q3.jpg',
        answers: {
            A: 'Tim Duncan',
            B: 'Joel Embiid',
            C: 'Stephen Curry',
            D: 'Deandre Jordan'
        },
        correctAnswer: 'D'
    },
    {
        question: 'Do you know the name of the NBA icon in this photo?',
        questionNumber: '4',
        image: '../images/q4.png',
        answers: {
            A: 'Stephen Curry',
            B: 'Joel Embiid',
            C: 'Stephen Curry',
            D: 'Morris Jordan'
        },
        correctAnswer: 'A'
    },
    {
        question: 'Which NBA icon is in this image?',
        questionNumber: '5',
        image: '../images/q5.png',
        answers: {
            A: 'Stephen Curry',
            B: 'Joel Embiid',
            C: 'Chris Paul',
            D: 'Morris Jordan'
        },
        correctAnswer: 'C'
    },
    {
        question: 'What university did Michael Jordan play with before joining the Bulls in his NBA debut?',
        questionNumber: '6',
        image: '../images/q6.png',
        answers: {
            A: 'Brown University',
            B: 'The University of North Carolina',
            C: 'Harvard International',
            D: 'None'
        },
        correctAnswer: 'B'
    },
    {
        question: 'Which NBA icon is in this image?',
        questionNumber: '7',
        image: '../images/q7.png',
        answers: {
            A: 'Michael Jordan',
            B: 'Joel Embiid',
            C: 'Chris Paul',
            D: 'Morris Jordan'
        },
        correctAnswer: 'A'
    },
    {
        question: 'What is the name of the NBA icon in this image?',
        questionNumber: '8',
        image: '../images/q8.png',
        answers: {
            A: 'Michael Jordan',
            B: 'Joel Embiid',
            C: 'Kevin Durant',
            D: 'Morris Jordan'
        },
        correctAnswer: 'C'
    },
    {
        question: 'Which NBA big man was famous for doing the finger-shaking gesture after blocking a shot?',
        questionNumber: '9',
        image: '../images/q9.jpg',
        answers: {
            A: 'Dikembe Mutombo',
            B: 'Joel Embiid',
            C: 'Kevin Durant',
            D: 'Morris Jordan'
        },
        correctAnswer: 'A'
    },
    {
        question: 'The famous basketball player Dr. J’s original name is what?',
        questionNumber: '10',
        image: '../images/q10.png',
        answers: {
            A: 'Dikembe Mutombo',
            B: 'Joel Embiid',
            C: 'Julius Erving',
            D: 'Morris Jordan'
        },
        correctAnswer: 'C'
    },
    {
        question: 'Which NBA icon is showcased in this photo?',
        questionNumber: '11',
        image: '../images/q11.png',
        answers: {
            A: 'Dikembe Mutombo',
            B: 'Joel Embiid',
            C: 'Julius Erving',
            D: 'Allen Iverson'
        },
        correctAnswer: 'D'
    },
    {
        question: 'Who, in fact, is the Slim Reaper?',
        questionNumber: '12',
        image: '../images/q12.jpg',
        answers: {
            A: 'Dikembe Mutombo',
            B: 'Kevin Durant',
            C: 'Julius Erving',
            D: 'Allen Iverson'
        },
        correctAnswer: 'B'
    },
    {
        question: 'Which player has the most career points?',
        questionNumber: '13',
        image: '../images/q13.png',
        answers: {
            A: 'Kareem Abdul-Jabbar',
            B: 'Kevin Durant',
            C: 'Julius Erving',
            D: 'Allen Iverson'
        },
        correctAnswer: 'A'
    },
    {
        question: 'Who, in fact, is the Mailman?',
        questionNumber: '14',
        image: '../images/q14.jpg',
        answers: {
            A: 'Kareem Abdul-Jabbar',
            B: 'Kevin Durant',
            C: 'Karl Malone',
            D: 'Allen Iverson'
        },
        correctAnswer: 'C'
    },
    {
        question: 'Which player has the most NBA championships under his belt? Hint: He played for the Celtics his entire career.',
        questionNumber: '15',
        image: '../images/q15.jpeg',
        answers: {
            A: 'Bill Russell',
            B: 'Kevin Durant',
            C: 'Karl Malone',
            D: 'Allen Iverson'
        },
        correctAnswer: 'A'
    },
    {
        question: 'Who, in fact, is the Greek Freak?',
        questionNumber: '16',
        image: '../images/q16.jpg',
        answers: {
            A: 'Bill Russell',
            B: 'Kevin Durant',
            C: 'Giannis Antetokounmpo',
            D: 'Allen Iverson'
        },
        correctAnswer: 'C'
    },
    {
        question: 'Lob City, the Clipper’s great trio of players during the mid-2010s, featured Chris Paul, Blake Griffin, and who?',
        questionNumber: '17',
        image: '../images/q17.jpg',
        answers: {
            A: 'Deandre Jordan',
            B: 'Kevin Durant',
            C: 'Giannis Antetokounmpo',
            D: 'Allen Iverson'
        },
        correctAnswer: 'C'
    },
    {
        question: 'How many rings has Shaquille Oneal won throughout his career?',
        questionNumber: '18',
        image: '../images/q18.jpg',
        answers: {
            A: '8',
            B: '3',
            C: '9',
            D: '4'
        },
        correctAnswer: 'D'
    },
    {
        question: 'Last season, Russel Westbrook became the all-time leader of triple-doubles in the NBA. Which legend did he pass up?',
        questionNumber: '19',
        image: '../images/q19.jpg',
        answers: {
            A: 'Bill Russell',
            B: 'Oscar Robertson',
            C: 'Giannis Antetokounmpo',
            D: 'Allen Iverson'
        },
        correctAnswer: 'B'
    },
    {
        question: 'Who were they the shortest NBA player of all time?',
        questionNumber: '20',
        image: '../images/q20.jpg',
        answers: {
            A: 'Bill Russell',
            B: 'Oscar Robertson',
            C: 'Giannis Antetokounmpo',
            D: 'Muggsy Bogues'
        },
        correctAnswer: 'D'
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