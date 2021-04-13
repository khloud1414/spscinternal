function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
/*  هينا تنتهي اللعبة */
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2> للاسف مافزت بالتحدي " + "<Br>"+ " &#128525; &#128151; ابتسم ترى ابتسامتك جميلة  " + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
   var move1;
    var game1 = quiz.score
     if (game1>=6){
        move1= "<br><br><br><br><br>"+"<h2 id='score'> مبروك الفوز  &#128079;  &#128151; " + "<br>"+"تواصل مع ادارة العلاقات العامة لاستلام الجائزه "+"</h2>" ;
    element.innerHTML=move1; }
        
};
/* هينا تنتهي اللعبة */
// create questions
var questions = [
    new Question("<img src='image/q1.png'style= width:500px; height: 600px; padding-left:40px;'/> </br>", ["الديم سوم", "اليغمش","المنتو", "قطايف"],
                 "المنتو"),

    new Question("<img src='image/q2.png'style= width:500px; height: 600px; padding-left:40px;'/> </br>", ["100 سعرة حرارية", "95 سعرة حرارية","70 سعرة حرارية", "45 سعرة حرارية"],
                 "70 سعرة حرارية"),
    

    new Question("<img src='image/q3.png'style= width:500px; height: 600px; padding-left:40px;'/> </br>", ["لبن", "سوبيا","جوز الهند", "عصير جوافة"],
                 "لبن"),
    

   new Question("<img src='image/q4.png'style= width:500px; height: 600px; padding-left:40px;'/> </br>", ["الامساك والفطور", "السحور والامساك","الفطور والسحور", "جميع ماسبق"],
                 "جميع ماسبق"),
    
   new Question("<img src='image/q5.png'style= width:500px; height: 600px; padding-left:40px;'/> </br>", ["مصر", "سوريا","الحجاز", "المغرب"],
                 "مصر"),
    
    new Question("<img src='image/q6.png'style= width:500px; height: 600px; padding-left:40px;'/> </br>", ["500 سعرة حرارية", "996 سعرة حرارية","662 سعرة حرارية", "240 سعرة حرارية"],
                 "662 سعرة حرارية"),
        

];


var quiz = new Quiz(questions);


populate();





