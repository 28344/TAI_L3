/*let questions =
    [
        {
        number: 1,
        question:'1. Jakiego typu grą jest Call of Duty?',
        answers: ['FPS','MMOPRG','Zręcznościowa','Logiczna'],
        correct_answer:'FPS'
        },
        {
         number: 2,
         question:'2. Jakiego koloru jest niebieski maluch?',
         answer: ['Niebieskiego', 'Czerwonego','Żółtego','Czarnego'],
         correct_answer:'Niebieskiego'
        },
        {
        number: 3,
        question:'3. Jaka jest prędkość światła?',
        answer:['Nie wiem', '123 456 7 kmh','300 000 kmsek','90kmh'],
        correct_answer:'300 000 kmsek'
        },

        {
        number:4,
        question:'4. Ziemia jest?',
        answer:['Kulą','Płaska','Elipsoidą','Prostokątem'],
        correct_answer:'Elipsoidą'
        },
        {
        number: 5,
        question:'5. Modelem mercedessa jest?',
        answer:['W123','E12','A5','WD40'],
        correct_answer:'W123'
        },
        {
        number:6,
        question:'6. Top Gun to film...?',
        answer:['Sensacyjny','Dramat','Komedia','Wojenny'],
        correct_answer:'Sensacyjny'
        },
        {
        number:7,
        question:'7. Stolica Australii jest...?',
        answer:['Melbourne','Canberra','Sydney','Delhi'],
        correct_answer:'Canberra'
        },
        {
        number:8,
        question:'8. Więcej niż jedno zwierze to?',
        answer:['Lama','Okoń','Linijka','Wataha'],
        correct_answer:'Wataha'
        },
        {
        number:9,
        question:'9. Co pływa po kanale weneckim?',
        answer:['Gondola','Ponton','Galera','Żaglówka'],
        correct_answer:'Gondola'
        },
        {
        number:10,
        question:'10. Jak nazywa się tradycyjny napój Anglików pity po południu?',
        answer:['Kawa','Mleko','Herbata','Sok'],
        correct_answer:'Herbata'
        }
    ];


let button=document.querySelector('.next');
button.addEventListener('click',function (evt) {

})*/

(function() {
    const myQuestions = [
        {
            question: "1.Jakiego typu grą jest Call of Duty? ",
            answers: {
                a: "FPS",
                b: "MMOPRG",
                c: "Zręcznościowa",
                d: "Logiczna"
            },
            correctAnswer: "a"
        },
        {
            question: "2.Jakiego koloru jest niebieski maluch?",
            answers: {
                a: "Niebieskiego",
                b: "Czerwonego",
                c: "Żółtego",
                d: "Czarnego"
            },
            correctAnswer: "a"
        },
        {
            question: "3.Jaka jest prędkość światła?",
            answers: {
                a: "Nie wiem",
                b: "123456778 km/h",
                c: "300 000 km/sek",
                d: "90 km/h"
            },
            correctAnswer: "c"
        },
        {
            question: "4.Ziemia jest?",
            answers: {
                a: "Kulą",
                b: "Płaska",
                c: "Elipsoidą",
                d: "Prostokątem"
            },
            correctAnswer: "c"
        },
        {
            question: "5.Modelem Mercedesa jest...?",
            answers: {
                a: "W123",
                b: "E12",
                c: "A5",
                d: "WD40"
            },
            correctAnswer: "a"
        },
        {
            question: "6.Top Gun to film...?",
            answers: {
                a: "Sensacyjny",
                b: "Dramat",
                c: "Komedia",
                d: "Wojenny"
            },
            correctAnswer: "a"
        },
        {
            question: "7.Stolicą Australii jest...?",
            answers: {
                a: "Melbourne",
                b: "Canberra",
                c: "Sydney",
                d: "Delhi"
            },
            correctAnswer: "b"
        },
        {
            question: "8.Ile wynosi czas ładowanie strony w html?",
            answers: {
                a: "Nie wiem",
                b: "Nie mam pojęcia",
                c: "Testuje",
                d: "A ze dwa dni"
            },
            correctAnswer: "c"
        },
        {
            question: "9.Co pływa po kanale weneckim?",
            answers: {
                a: "Ponton",
                b: "Galera",
                c: "Katamaran",
                d: "Gondola"
            },
            correctAnswer: "d"
        },
        {
            question: "10.Jak nazywa się tradycyjny napój Anglików pity po południu?",
            answers: {
                a: "Kawa",
                b: "Mleko",
                c: "Herbata",
                d: "Sok"
            },
            correctAnswer: "c"
        }
    ];

    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "#800000";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `Super! Zdobyłeś : ${numCorrect} poprawnych odpowiedzi na : ${myQuestions.length} możliwych do uzyskania`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();





