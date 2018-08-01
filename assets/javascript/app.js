
       //global variables
var time = 20;
var questions = 
{
    q1: ["Who is not a member of the Teen Titans?"],
        answers:
            {
             "a" : "Raven",
             "b" : "Beast Boy",
             "c" : "Kid Flash",
             "d" : "Starfire",
            },
    q2: ["Which Teen Titan can turn into any animal?"],
           answers:
            {
            "a" : "Robin",
             "b" : "Starfire",
             "c" : "Cyborg",
             "d" : "Beast Boy",
            },
    
    q3: ["Who Teen Titan was Batman's former sidekick?"],
            answers:
            {
            "a" : "Robin",
             "b" : "Raven",
             "c" : "Beast Boy",
             "d" : "Cyborg",
             },
        
    q4: ["Which Teen Titan's father is  a powerful demon?"],
           answers: 
           {
            "a" : "Starfire",
            "b" :  "Robin",
            "c" :  "Raven",
            "d" :  "Beast Boy",
             },
    
    q5: ["Which Teen Titan is an alien?"],
            answers:
            {
            "a" : "Raven",
             "b" : "Beast Boy",
             "c" : "Cyborg",
             "d" : "Starfire",
             },
        
    q6: ["What is Robin's go to weapon?"],
            answers:
            {
            "a" : "Mcguffin",
             "b" : "Pain Bot",
             "c" : "Birdarang",
             "d" : "Meatball Blaster",
             },
    
    q7: ["Which rainy day activity makes the rain clouds happy?"],
            answers:
            {
            "a" : "Spaghetti Dance",
             "b" : "Reading Books",
             "c" : "Pee Pee Dance",
             "d" : "Building with Popsicle sticks",
            },
    q8: ["What does Beast Boy do to make Robin earn bees"],
            answers:
            {
            "a" : "Make tofu",
             "b" : "Go undercover with HIVE",
             "c" : "Reveal his Identity",
             "d" : "Dance",
            },
    q9: ["What is Raven's favorite show?"],
            answers:
            {
            "a" : "Power Puff Girls",
             "b" : "Pretty Pretty Pegasus",
             "c" : "Mother May-Eye",
             "d" : "Adventure Time",
            },
    
    q10: ["What is Starfire's favorite animal?"],
            answers:
            {
            "a" : "Kitten",
             "b" : "Pteradactyl",
             "c" : "Kangaroo",
             "d" : "Gulag",
            },
}; 

var correctAnswers;
var wrongAnswers;
var intervalId;

console.log(questions.q1);

function startGame() {

}

function gameplay () {    
          
         $(".startbtn").on("click", function() {
            $(".startbtn").remove();
            $(".card-text").empty();
            question1();
            run();
            decrement();
        })
    }
function question1 () {
        var quests = $("<div>");
        quests.html(questions.q1);
        $(".card-text").append(quests);
        intervalId = setInterval(decrement, 1000);
        }   

        function run () {
    clearInterval(intervalId);
    intervalId = setInterval(decrement,1000);
}

function decrement () {
    time--;
    $(".timer").html("Time left: " + time)
    if (time === 0) {
        stop();
    }
}
function stop () {
    clearInterval(intervalId);
};

gameplay();