let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","purple"];

let level=0;
let started=false;

let scores=document.querySelector("#score");

let startBtn=document.querySelector("#start-btn");
startBtn.addEventListener("click",function(){
    if(started==false){
        console.log("Game Started");
        started=true;

        levelup();
    }
});

function gameFlash(btn){    
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
};

function userFlash(btn){    
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
};

function levelup(){
    userSeq=[];
    level++;
    scores.innerText=level;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`#${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
};

function checkAns(){
    // console.log("Curr level: ",level);
    let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length===gameSeq.length){
        setTimeout(levelup,1000);
       }
    }    else{ 
        h2.innerHTML=`Game Over! YOUR SCORE: <b>${level}</b><br>Press Start to Play Again!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#fff";
        },150);
        restart();
}
}
function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function restart(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}