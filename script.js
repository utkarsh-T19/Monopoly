//script for welcome.html 
function playnow() {
    var x = document.getElementById("players");
    var y = document.getElementById("playNowButton");
    if (x.style.display === "none"){
        x.style.display = "block";
        y.style.display = "none";
    }
    else {
        x.style.display = "none";
    }
}

function backPlay() {
    var x = document.getElementById("players");
    var y2 = document.getElementById("twoNames");
    var y3 = document.getElementById("threeNames");
    var y4 = document.getElementById("fourNames");
    var y5 = document.getElementById("fiveNames");
    var y6 = document.getElementById("sixNames");
    if (x.style.display === "none"){
        x.style.display = "block";
        y2.style.display = "none";
        y3.style.display = "none";
        y4.style.display = "none";
        y5.style.display = "none";
        y6.style.display = "none";
    }
    else {
        x.style.display = "none";
    }
}

function nextname() {
    if(document.getElementById("twoPlayers").checked){
        var x = document.getElementById("twoNames")
    }
    else if(document.getElementById("threePlayers").checked){
        var x = document.getElementById("threeNames")
    }
    else if(document.getElementById("fourPlayers").checked){
        var x = document.getElementById("fourNames")
    }
    else if(document.getElementById("fivePlayers").checked){
        var x = document.getElementById("fiveNames")
    }
    else if(document.getElementById("sixPlayers").checked){
        var x = document.getElementById("sixNames")
    }
    else {
        errorMessage();
    }
    var y = document.getElementById("players");
    if (x.style.display === "none"){
        x.style.display = "block";
        y.style.display = "none";
        document.getElementById("errorMsg2").innerHTML = "";
        document.getElementById("star2").innerHTML = "";
        document.getElementById("errorMsg3").innerHTML = "";
        document.getElementById("star3").innerHTML = "";
        document.getElementById("errorMsg4").innerHTML = "";
        document.getElementById("star4").innerHTML = "";
        document.getElementById("errorMsg5").innerHTML = "";
        document.getElementById("star5").innerHTML = "";
        document.getElementById("errorMsg6").innerHTML = "";
        document.getElementById("star6").innerHTML = "";
    }
    else {
        x.style.display = "none";
    }
}

function startGame(){
    if(document.getElementById("twoPlayers").checked){
        var x1 = document.getElementsByClassName("playerOne");
        var x2 = document.getElementsByClassName("playerTwo");
        if(x1[0].value === "" || x2[0].value === ""){
            document.getElementById("errorMsg2").innerHTML = "Fill required fields (*)";
            document.getElementById("star2").innerHTML = "*";
        }
        else{
            window.location.href = "monopoly.html";
        }
    }
    else if(document.getElementById("threePlayers").checked){
        var x1 = document.getElementsByClassName("playerOne");
        var x2 = document.getElementsByClassName("playerTwo");
        var x3 = document.getElementsByClassName("playerThree");
        if(x1[1].value === "" || x2[1].value === "" || x3[0].value === ""){
            document.getElementById("errorMsg3").innerHTML = "Fill required fields (*)";
            document.getElementById("star3").innerHTML = "*";
        }
        else{
            window.location.href = "monopoly.html";
        }
    }
    else if(document.getElementById("fourPlayers").checked){
        var x1 = document.getElementsByClassName("playerOne");
        var x2 = document.getElementsByClassName("playerTwo");
        var x3 = document.getElementsByClassName("playerThree");
        var x4 = document.getElementsByClassName("playerFour");
        if(x1[2].value === "" || x2[2].value === "" || x3[1].value === "" || x4[0].value === ""){
            document.getElementById("errorMsg4").innerHTML = "Fill required fields (*)";
            document.getElementById("star4").innerHTML = "*";
        }
        else{
            window.location.href = "monopoly.html";
        }
    }
    else if(document.getElementById("fivePlayers").checked){
        var x1 = document.getElementsByClassName("playerOne");
        var x2 = document.getElementsByClassName("playerTwo");
        var x3 = document.getElementsByClassName("playerThree");
        var x4 = document.getElementsByClassName("playerFour");
        var x5 = document.getElementsByClassName("playerFive");
        if(x1[3].value === "" || x2[3].value === "" || x3[2].value === "" || x4[1].value === "" || x5[0].value === ""){
            document.getElementById("errorMsg5").innerHTML = "Fill required fields (*)";
            document.getElementById("star5").innerHTML = "*";
        }
        else{
            window.location.href = "monopoly.html";
        }
    }
    else if(document.getElementById("sixPlayers").checked){
        var x1 = document.getElementsByClassName("playerOne");
        var x2 = document.getElementsByClassName("playerTwo");
        var x3 = document.getElementsByClassName("playerThree");
        var x4 = document.getElementsByClassName("playerFour");
        var x5 = document.getElementsByClassName("playerFive");
        var x6 = document.getElementsByClassName("playerSix");
        if(x1[4].value === "" || x2[4].value === "" || x3[3].value === "" || x4[2].value === "" || x5[1].value === "" || x6[0].value === ""){
            document.getElementById("errorMsg6").innerHTML = "Fill required fields (*)";
            document.getElementById("star6").innerHTML = "*";
        } else{
            window.location.href = "monopoly.html";
        }
    }
}

function errorMessage(){
    document.getElementById("errorMsg").innerHTML = "Fill required fields (*)";
    document.getElementById("star").innerHTML = "*";
}

//script for monopoly.html

