
const submit=document.getElementById("submit");
let display=document.getElementById("display");
let card1=document.getElementById("pic-1");
let card2=document.getElementById("pic-2");
let card3=document.getElementById("pic-3");
let card4=document.getElementById("pic-4");
let card5=document.getElementById("pic-5");
let images=["two.jpeg","three.jpeg","four.jpeg","five.jpeg","six.jpeg","seven.jpeg","eight.jpeg","nine.jpeg","ten.jpeg","jack.jpeg","ace.jpeg"]
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11];
let input= null;


 function find(){ 
     card5.src = "";
    if (input) {
        input.remove(); 
        input = null;   
    }
    let firstCard=Math.floor(Math.random()*11);
let secondCard=Math.floor(Math.random()*11);
let thirdCard=Math.floor(Math.random()*11);
let fourthCard=Math.floor(Math.random()*11);
let fifthCard=Math.floor(Math.random()*11);

let sum=values[firstCard]+values[secondCard];
card1.src=images[firstCard];
card2.src=images[secondCard];
card3.src=images[thirdCard];

let oppsum=values[thirdCard]+values[fifthCard];
  if(sum===21){
display.innerHTML=`BLACKJACK!`;
    }
    else if(sum>21){
        display.innerHTML= `You loose`;
    }
    else if(sum<21){
        display.innerHTML=`Current sum:${sum}`;
         
submit.addEventListener("click",()=>{
    card4.src=images[fifthCard];
   if(21<sum||oppsum===21){
            display.innerHTML=`You lose`;
        }
        else if(oppsum > 21 || sum > oppsum){
            display.innerHTML=`You win`
        }
        else if(sum < oppsum){
            display.innerHTML=`You lose`
        }
        else{
            display.innerHTML=`Tie`
        }
})
        let input=document.createElement("button");
        display.appendChild(document.createElement("br"))
        display.appendChild(input)
        input.classList.add("draw");
        input.style.width="90px"
        
        input.style.height="20px"
        input.innerHTML="Draw";
        input.addEventListener("click",()=>{
            card5.src=images[fourthCard];
            sum+=values[fourthCard];
        if(sum>21){
            display.innerHTML=`Bust`;
        }
        else if(sum===21){
            display.innerHTML=`Blackjack`
        }
        else if(sum<21){
            display.innerHTML=`Current sum:${sum}`;
        }
        })
  }
    }
    find();
const playagain=document.getElementById("play-again")
    
playagain.addEventListener("click",()=>{
   
    find();
})