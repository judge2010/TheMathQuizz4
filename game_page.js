var player1_name = localStorage.getItem("player_name1");
var player2_name = localStorage.getItem("player_name2");
document.getElementById("name1").innerHTML=player1_name + " :  ";
document.getElementById("name2").innerHTML=player2_name + " :  ";
var player1_score = 0;
var player2_score = 0;
document.getElementById("score1").innerHTML = player1_score;
document.getElementById("score2").innerHTML = player2_score;
document.getElementById("ques_player").innerHTML = " " + "ques turn : " + player1_name;
document.getElementById("ans_player").innerHTML = " " + "ans turn : " + player2_name;
function send(){
    var no_1 = document.getElementById("1_no.").value;
    var no_2 = document.getElementById("2_no.").value;
    var actual_ans = no_1 * no_2;
    document.getElementById("ques").innerHTML = no_1 + "x" + no_2
    document.getElementById("2_no.").innerHTML = "";
    document.getElementById("1_no.").innerHTML = "";
   }
   var playerAns = document.getElementById("ans").value;
   function check(){
   if(playerAns == actual_ans){
    player1_score = player1_score + 1;
   }
   if(playerAns == actual_ans){
    player2_score = player2_score + 1;

    if(playerAns != actual_ans){
        player1_score = player1_score + 1;
       }

       if(playerAns != actual_ans){
        player2_score = player2_score + 1;
       }
   }
   }
   