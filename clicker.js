function handleClicker(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } 
    else {
        localStorage.clickcount = 1;
    }
    if(localStorage.clickcount == 10){
        document.getElementById("img").style.display = "inline";
    }
    if(localStorage.clickcount == 100){
        document.getElementById("img").src = "./imgs/doge_with_it.gif"
    }
    document.getElementById("counter").innerHTML = "Current Clicker count: " + localStorage.clickcount + " !?" + " (The count will be kept refresh)";
}

function handleReset(){
    if(localStorage.clickcount){
        localStorage.clickcount = 0;
        document.getElementById("counter").innerHTML = "Current Clicker count: " + localStorage.clickcount + " !?";
    }
}

window.onload = function() {
    document.getElementById("counter").innerHTML = "Current Clicker count: " + localStorage.clickcount + " !?";
};