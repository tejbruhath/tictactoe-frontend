let boxes = document.querySelectorAll(".boxes");
let turnX = true;
let count = 0;
let xScore = document.querySelector("#xScore");
let oScore = document.querySelector("#oScore");
let newGamebtn = document.querySelector("#newGame");
const patterns = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
] ;
     
const disableBoxes = () => {
    for(let box of boxes){
        box.classList.add("played");
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.classList.remove("played");
        box.classList.remove("playedX");
        box.classList.remove("playedO");
        box.innerText = "";
    }
    turnX = true;
    count = 0;
};
const newGame = document.querySelector("#newGame");
newGame.onclick = enableBoxes;
document.querySelector("#reset").onclick = enableBoxes;
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
            box.classList.add("playedX");
        }else {
            box.innerText = "O";
            turnX = true;
            box.classList.add("playedO");
        }
        
        count++;

        let isWinner =  checkWinner();
        if(count === 9 && !isWinner){
            alert(`Its a draw for now!`);
            disableBoxes();
            newGamebtn.style.visibility = "visible";
        }
    });
});

const checkWinner = () => {
    for (let pattern of patterns){
        let val1 =  boxes[pattern[0]].innerText;
        let val2 =  boxes[pattern[1]].innerText;
        let val3 =  boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != "") {
            if(val1 === val2 && val2 === val3){
                alert(`${val1} has won the game`);
                disableBoxes();
                newGamebtn.style.visibility = "visible";
                if(val1 === "X"){
                    xScore.innerText = parseInt(xScore.innerText) + 1;
                }else{
                    oScore.innerText = parseInt(oScore.innerText) + 1;
                }
                return true;
            }
        }
    }
    return false;
}