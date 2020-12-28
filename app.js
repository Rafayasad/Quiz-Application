function submitform(e){
    e.preventDefault();
    var name = document.forms["welcome_text"]["name"].value;
    
    // store into storage //
    
    sessionStorage.setItem("name",name);
    location.href = "index.html";
    console.log(name);
}


var questionArrays = [
    {
        question: 'Question 01 : 5+5',
        answer: '10',
        options: [
            '8',
            '9',
            '10',
            '11'
        ]
    },
    {
        question: 'Question 02 : 10+5',
        answer: '15',
        options: [
            '12',
            '13',
            '15',
            '11'
        ]
    },
    {
        question: 'Question 03 : 10+9',
        answer: '19',
        options: [
            '19',
            '9',
            '18',
            '15'
        ]
    }
]

function showQuestion(e) {
   
    //////////////////////// show questions //////////////////////////
    
    var showQuestion = document.getElementById("showQuestion");
    showQuestion.innerHTML = questionArrays[e].question;
    
    ////////////////////////// show options /////////////////////////
    
    var showOption = document.getElementsByClassName("para");
    for (var i = 0; i < showOption.length; i++) {
        showOption[i].innerHTML = questionArrays[e].options[i];
    }
}
var count = 0;
var score = 0;
function nextQuestion() {
    var userInput = document.querySelector('p.active').innerHTML;
    
    if (userInput == questionArrays[count].answer) {
        score = score + 1;
        sessionStorage.setItem("score",score);
    }

    if (count == questionArrays.length - 1) {
        location.href = "result.html";
        return;
    }
    
    count++;
    showQuestion(count);
    removeMarkAnswer();
}

////////////////////////// put active marking ///////////////////////

function markAnswer(e) {
    removeMarkAnswer();
    e.classList.add('active');
}

//////////////////////// remove multiple active marking ////////////////////

function removeMarkAnswer() {
    var active = document.getElementsByClassName("active");
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active");
    }
}


function home(){
    location.href = "start.html";
    return;
}

// function result(){    
//     var userInput = document.querySelector('p.res').innerHTML;
//     if(userInput == questionArrays[count].answer){
//         score = score + 1;
//         console.log(score);

// }
// }

// // function result() {
// //     document.write("<h1>Quiz 01 Result:</h1>");
// //     var userInput = document.querySelector('p.active').innerHTML;
// //     if(userInput == questionArrays[count].answer) {
// //         score = score + 1;
// //         document.write("score is :"+score);

// //     }
// // }