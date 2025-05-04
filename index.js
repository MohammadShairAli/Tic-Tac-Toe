let buttons = document.querySelectorAll(".buttons");
let win_show = document.querySelector(".win-show")
let btn_play_again = document.querySelectorAll(".play-again")
let btn_restart = document.querySelector(".restart")
let winner = document.querySelector(".winner")
let playerX = true;
let all_not_filled = true;
let Win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


buttons.forEach((button) => {
    button.onclick = ()=>{
        if (playerX){
            button.innerHTML = "X";
            button.disabled = true;
            playerX = false;
            checkWin(button)
        }
        else{
            button.innerHTML = "O";
            button.disabled = true;
            playerX = true;
            checkWin(button)
        }
    }
});


function none_wins(){
    all_not_filled = true;
    buttons.forEach((button)=>{

        if (button.innerHTML === ""){
            all_not_filled = false;
            return all_not_filled
        }
    })
    
    return all_not_filled;
}

function checkWin(button){
    Win.forEach((list)=>{
        let one = list[0];
        let two = list[1];
        let three = list[2];
        if (buttons[one].innerHTML !== "" && buttons[two].innerHTML !== "" && buttons[three].innerHTML !== ""){
            if (buttons[one].innerHTML == button.innerHTML && buttons[two].innerHTML == button.innerHTML && buttons[three].innerHTML == button.innerHTML){
                winner.innerHTML = `Player ${button.innerHTML} Wins!!!`;
                disable();
            }else if(none_wins()){
                winner.innerHTML = `Its a draw`;
                disable();
            }
        }
    })
}

function disable(){
    buttons.forEach((button)=>{
        button.disabled = true;
        win_show.classList.remove("hidden");
    })
    btn_restart.classList.add("hidden")
}

btn_play_again.forEach((btn)=>{
    btn.onclick = ()=>{
        win_show.classList.add("hidden");
        buttons.forEach((button)=>{
            button.disabled = false;
            button.innerHTML = null;
        })
    }
})
