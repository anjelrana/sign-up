
var grade = ["S", "A" , "B", "C"];
var number = Math.floor(Math.random*100) + 1;
alert(hello);

document.getElementsByClassName("button")[0].addEventListener("click", function () {
    var inputLevel = document.getElementById("power-level").value;

    var dynamicRank = document.getElementById("change")
     
    if (inputLevel <= 30 && input >= 0  ) {
        dynamicRank.innerText = "Rank "+ grade[3] + " " + number ;
    } else if (inputLevel >30 && inputLevel<= 70  ) {
        dynamicRank.innerText = "Rank "+ grade[2] + " " + number ;
    }
    else if (inputLevel > 70 && inputLevel <= 90  ) {
        dynamicRank.innerText = "Rank "+ grade[1] + " " + number ;
    }
    else if (inputLevel > 90 && inputLevel <= 100  ) {
        dynamicRank.innerText = "Rank "+ grade[0] + " " + number ;
    } else {
        dynamicRank.innerText = "FAIL";
    }



})