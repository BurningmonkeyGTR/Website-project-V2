function checkAnswers(){
    console.log("enter function")
    let score = 0
    let result = 0
    let quiz = document.forms.quiz.elements;
    let answer1 = quiz.firstSMove.value
    let answer2 = quiz.firstShip.value
    let answer3 = quiz.cupilFood.value
    let answer4 = quiz.finalBoss.value
    if (answer1 == "cutlassFury"){
        score = score + 1
    }
    if (answer2 == "albatross"){
        score = score + 1
    }
    if (answer3 == "chams"){
        score = score + 1
    }
    if (answer4 == "ramirez"){
        score = score + 1
    }
    if (score == 0){
        result = "0%| You haven't played Skies of Arcadia have you? you should try it"
    }
    else if (score == 1){
        result = "25%| Did you get a lucky guess or have you just not played it for a long time"
    }
    else if (score == 2){
        result = "50%| Not bad, you clearly know enough to see why Skies of Arcadia needs a remake"
    }
    else if (score == 3){
        result = "75%| A knowledgeable player, pretty good"
    }
    else if (score == 4){
        result = "100%| I hereby acknowledge you as a Skies of Arcadia expert"
    }
    console.log(result);
    alert("your score is " + result)
}