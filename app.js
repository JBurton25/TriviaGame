function checkUserAnswer() {
    $("button").on("click", function () {
        var checkRightAnswer = $(this).attr("value");
        clearInverval(IntervalId);
        if (checkRightAnswer === 1) {
            correctAnswers++;
            $("button").remove();
            $(".card-text").empty();
            setTimeout(function() {
                $(".card-text").html("You are Correct!")
                var robinGif = "<img src ='https://media1.tenor.com/images/63e65b9209a21a212ee1811f6989a340/tenor.gif?itemid=7785777' alt='robin'/>";
                $(".card-text").append(robinGif);
            }, 5000);
        }
    }
}