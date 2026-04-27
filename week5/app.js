// 1. js파일에서 접근해야하는 html dom 요소 선언
const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

const resultText = document.getElementById("display-result");

const myScoreText = document.getElementsByClassName("my-score")[0];
const comScoreText = document.getElementsByClassName("computer-score")[0];

const resetBtn = document.getElementById("reset-button");

const themeBtn = document.getElementById("theme-button");

// 2. 이벤트 설정
rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);
resetBtn.addEventListener("click", resetScore);
themeBtn.addEventListener("click", changeTheme);

// 3. displayMyChoice 함수 설정
function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

// 4. 랜덤으로 뱉는 컴퓨터
function getComChoice() {
    const randomValue = {
        0: ["rock", "fa-regular fa-hand-back-fist"],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2: ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

// 5. 컴퓨터의 선택이 화면에 보이도록 하는 함수
function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

// 6. start 함수
function start(mychoice) {
    let resultArray = getComChoice();
    displayComChoice(resultArray);

    //mychoice에 "rock", "scissors", "paper" 중 하나 저장
    //resultArray[0]에 "rock", "scissors", "paper" 중 하나 저장
    decideWinner(mychoice, resultArray[0]);
}

// 7. 승패 판단 함수
function decideWinner(myChoice, comChoice){
    if (myChoice === comChoice){
        resultText.innerText = "Draw!";
        displayScore();
    }

    else if (myChoice === "rock" && comChoice === "scissors" || myChoice === "paper" && comChoice === "rock" || myChoice === "scissors" && comChoice === "paper"){
        resultText.innerText = "Win!";
        updateScore("me");
    }

    else{
        resultText.innerText = "Lose!";
        updateScore("com");
    }
}


// 8. 점수판 업데이트 함수
let myScore = 0;
let comScore = 0;

function updateScore(winner){
    if (winner == "me"){
        myScore++;
    }
    else if (winner == "com"){
        comScore++;
    }
    displayScore();
}

// 9. 점수판 화면에 띄우는 함수
function displayScore(){
    myScoreText.innerText = myScore;
    comScoreText.innerText = comScore;
}

// 10. 점수판 리셋 함수
function resetScore(){
    myScore = 0;
    comScore = 0;

    displayScore();
}

// 11. 테마 변경 함수
let themeNow = "light";

function changeTheme(){
    if (themeNow == "light"){
        const changeClassElements = document.querySelectorAll(".change");

        for (let now of changeClassElements){
            now.classList.replace("change", "change-reverse");
        }

        themeNow = "dark";
        themeBtn.innerText = "☀️"
    }        

    else if (themeNow == "dark"){
        const changeReverseClassElements = document.querySelectorAll(".change-reverse");

        for (let now of changeReverseClassElements){
            now.classList.replace("change-reverse", "change");
        }

        themeNow = "light";
        themeBtn.innerText = "🌙"
    }
}