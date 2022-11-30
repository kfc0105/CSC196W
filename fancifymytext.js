function bigger(){
    //alert("Hello, World! I am using Javascript!");    
    document.getElementById("text1").style.fontSize = "24pt";
}

function fancyShmancy(){
    //alert("Hello, World! I am using Javascript!");  
    document.getElementById("text1").style.fontWeight = "bold";
    document.getElementById("text1").style.color = "blue";
    document.getElementById("text1").style.textDecoration = "underline";
}

function boringBetty(){
    document.getElementById("text1").style.fontWeight = "normal";
    document.getElementById("text1").style.color = "black";
    document.getElementById("text1").style.textDecoration = "";
}

function moo(){
    document.getElementById("text1").style.textTransform = "uppercase"
    var str = document.getElementById("text1").value;
    var parts = str.split(".");
    document.getElementById("text1").value = parts.join("-MOO");
}