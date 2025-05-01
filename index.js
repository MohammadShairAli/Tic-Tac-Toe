let buttons = document.querySelectorAll(".buttons");
let playerX = true;
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
            playerX = false;
            checkWin(button)
        }
        else{
            button.innerHTML = "O";
            playerX = true;
            checkWin(button)
        }
    }
});

function checkWin(button){
    Win.forEach((list)=>{
        let one = list[0];
        let two = list[1];
        let three = list[2];
        if (buttons[one].innerHTML !== ""&& buttons[two].innerHTML !== "" && buttons[three].innerHTML !== ""){
            if (buttons[one].innerHTML == button.innerHTML && buttons[two].innerHTML == button.innerHTML && buttons[three].innerHTML == button.innerHTML){
                console.log("win");
                disable();
            }
        }
    })
}

function disable(){
    buttons.forEach((button)=>{
        button.disabled = true;
    })
}