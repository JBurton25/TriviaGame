$(document).ready(function() {



$(".startbtn").on("click", trivia.startGame);
$(document).on("click", ".btnContainer", trivia.checkGuess);


})

var trivia = {
    correct: 0,
    incorrect: 0,
    currentSet: 0,
    timer: 15,
    timerOn: false,
    timerId : "",

    questions: {
    q1: "Who is not a member of the Teen Titans?",
    q2: "Which Teen Titan can turn into any animal?",
    q3: "Who Teen Titan was Batman's former sidekick?",
    q4: "Which Teen Titan's father is  a powerful demon?",
    q5: "Which Teen Titan is an alien?",
    q6: "What is Robin's go to weapon?",
    q7: "Which rainy day activity makes the rain clouds happy?",
    q8: "What does Beast Boy do to make Robin earn bees",
    q9: "What is Raven's favorite show?",
    q10: "What is Starfire's favorite animal?",
    },
    choices: {
        q1: ["Raven","Beast Boy","Kid Flash","Starfire"],
        q2: ["Robin", "Starfire", "Cyborg", "Beast Boy"],
        q3: ["Beast Boy", "Cyborg", "Robin", "Raven"],
        q4: ["Starfire", "Robin", "Raven", "Beast Boy"],
        q5: ["Cyborg","Beast Boy", "Starfire", "Robin"],
        q6: ["Mcguffin","Pain Bot", "Birdarang","Meatball Blaster"],
        q7: ["Spaghetti Dance","Reading Books","Pee Pee Dance", "Building with Popsicle sticks"],
        q8: ["Make tofu", "Go undercover with HIVE","Reveal his Identity","Dance"],
        q9: ["Power Puff Girls", "Pretty Pretty Pegasus","Mother May-Eye","Adventure Time"],
       q10: ["Kitten","Pteradactyl","Kangaroo","Gulag"],
},
    answers: {
        q1: "Kid Flash",
        q2: "Beast Boy",
        q3: "Robin",
        q4: "Raven",
        q5: "Starfire",
        q6: "Birdarang",
        q7: "Spaghetti Dance",
        q8: "Dance",
        q9: "Pretty Pretty Pegasus",
       q10: "Kitten"

    },


startGame: function () {
   
    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.incorrect = 0;
    clearInterval(trivia.timerId);

    $(".game").show();
    $(".results").html ("");
    $(".timer").text(trivia.timer);
    $(".startbtn").hide();
    
    trivia.nextQuestion();

},


nextQuestion:  function() {
    trivia.timer = 15;
    $(".timer").text(trivia.timer);

    if(!trivia.timerOn) {
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
    }

    var question = Object.values(trivia.questions)[trivia.currentSet];
    $(".card-text").text(question);

    var allQuestions = Object.values(trivia.choices)[trivia.currentSet];

    $.each(allQuestions, function(index, key) {
        $(".btnContainer").append($("<button class='option btn btn-primary btn-lg'>" + key + "</button>"));
    })

},

timerRunning: function () {
 if(trivia.timer > 0 && trivia.currentSet < Object.keys(trivia.questions).length){
     $(".timer").text(trivia.timer);
    trivia.timer--;
 } else if (trivia.timer === 0) {
     clearInterval(trivia.timerId);
     resultId = setTimeout(trivia.guessResult, 1000);
     $(".results").html("Time's up! The answer is "+ Object.values(trivia.answers)[trivia.currentSet]);
 } else if (trivia.currentSet === Object.keys(trivia.questions).length){
     $(".results").html("Thanks for Playing!" +
        "<p>Correct: " + trivia.correct + "</p>" +
        "<p>Incorrect: " + trivia.incorrect + "</p>");   
 }
},

checkGuess: function () {
    
   var currentAnswer=  Object.values(trivia.answers)[trivia.currentSet];
         console.log(currentAnswer);
    
    if (currentAnswer == (Object.values(trivia.answers)[trivia.currentSet])) {
        trivia.correct++;
        clearInterval(trivia.timerId)
        resultId = setTimeout(trivia.guessResult, 1000);
        $(".results").html("You are Correct!");
    } else if (Object.values(trivia.answers)[trivia.currentSet]!== currentAnswer) {
        trivia.incorrect++;
        clearInterval(trivia.guessResult, 1000);
        $(".results").html("Sorry! The answer is " + currentAnswer);
    }
 },

guessResult: function() {
    trivia.currentSet++;
    $(".results").empty();
    $(".btnContainer").empty();
    trivia.nextQuestion();
}
}
    