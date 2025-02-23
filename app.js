let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector("#reset");

let turnO = true;

//Winning Patterns

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


//Adding Event Listeners to all boxes

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            //playerO
            box.innerText ="O";
            turnO = false;
            checkWin();
        }else{
            //playerX
            box.innerText ="X";
            turnO = true;
            checkWin();
        }
        box.disabled=true;
    })
})

const checkWin = ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                alert("Player " +pos1Val + " wins!");
                resetGame();
            }
        }
    }
}

const resetGame = ()=>{
    boxes.forEach((box)=>{
        box.innerText ="";
        box.disabled=false;
        turnO = true;
    })};