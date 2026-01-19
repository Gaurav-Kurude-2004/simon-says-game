let userseq = [];
let gameseq = [];
let started = false;
let level = 0;
let highScore = 0;
let btns = ["red","blue","black","green"];
let h2 = document.querySelector('h2');
document.addEventListener('click', ()=>{
   if(started==false){
      console.log("game is started");
      started = true;
      levelup();
   }
})

function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash");
   },250);
}

function userflash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
      btn.classList.remove("userflash");
   },250);
}
function levelup(){
   userseq = [];
   level++;
   h2.innerText = `Level ${level}`;
   let randidx = Math.floor(Math.random()*4);
   let randcolor = btns[randidx];
   let ranbtn = document.querySelector(`.${randcolor}`);
   gameseq.push(randcolor);
   gameflash(ranbtn);
   console.log(gameseq);
}

function checkAns(idx){
   if(userseq[idx]===gameseq[idx]){
      if(gameseq.length==userseq.length){
         levelup();
      }
   }else{
      let p = level
      if(p>highScore){
         highScore = p;
         h.innerText = `High Score : ${highScore}`;
      }
      h2.innerHTML = `Game Over! your score is : ${level}<br> Press Any Key to Start.`;
      document.querySelector('body').style.backgroundColor ="red";
      setTimeout(() => {
         document.querySelector('body').style.backgroundColor = "white";
      }, 150);
     document.addEventListener('click',reset());
   }
}

function btnpres(){
   let btn = this;
   userflash(btn);

   usercolor = btn.getAttribute("id");
   userseq.push(usercolor);
   console.log(userseq);
   checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".box");
for(btn of allbtns){
   btn.addEventListener('click',btnpres);
}

function reset(){
   started = false;
   level = 0;f
   gameseq = [];
   userseq = [];
}

let h = document.querySelector(".highscore");
