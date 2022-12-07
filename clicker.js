function handleClicker(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } 
    else {
        localStorage.clickcount = 1;
    }
    if(localStorage.clickcount == 100){
        document.getElementById("img").style.display = "inline";
    }
    document.getElementById("counter").innerHTML = "Current Clicker count: " + localStorage.clickcount + " !?";
}

window.onload = function() {
    document.getElementById("counter").innerHTML = "Current Clicker count: " + localStorage.clickcount + " !?";
};