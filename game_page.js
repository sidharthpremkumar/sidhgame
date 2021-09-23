player_1_name=localStorage.getItem("player1_name");
player_2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1").innerHTML= player_1_name + ":";
document.getElementById("player2").innerHTML= player_2_name + ":";

document.getElementById("player_1score").innerHTML=player1_score;
document.getElementById("player_2score").innerHTML=player2_score;

document.getElementById("playerQuestion").innerHTML="Question Turn-"+ player_1_name;
document.getElementById("playerAnswer").innerHTML="Answer Turn-"+ player_2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lowercase is "+word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(length_divide_2);
    console.log(charAt2);

    length_minus_1=word.length-1
    charAt3=word.charAt(length_minus_1);
    console.log(length_minus_1);
    console.log(charAt3);

    remove_charAt1=word.replace(charAt1,"_");
    console.log(remove_charAt1);
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    console.log(remove_charAt2);
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    Question="<h4 id='word_display'> Q"+remove_charAt3+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'>check</button>";
    row=Question+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value ="";
}

        Question_turn="player_1";
        answer_turn="player_2";

        function check(){
            get_answer=document.getElementById("input_check_box").value;
            answer=get_answer.toLowerCase();
            console.log("answer is -"+answer);

            if(answer==word){
                if(answer_turn=="player_1"){
                    player1_score=player1_score +1;
                    document.getElementById("player_1score").innerHTML=player1_score;
                }
                else{
                    player2_score=player2_score +1;
                    document.getElementById("player_2score").innerHTML=player2_score;
                }
            }
            if(Question_turn=="player_1"){
                Question_turn="player_2";
                document.getElementById("playerQuestion").innerHTML="Question Turn -"+player_2_name;
            }
            else{
                Question_turn="player_1";
                document.getElementById("playerQuestion").innerHTML="Question Turn -"+player_1_name;
            }
            if(answer_turn=="player_1"){
                answer_turn="player_2";
                document.getElementById("playerAnswer").innerHTML="Answer Turn -"+player_2_name;
            }
            else{
                answer_turn="player_1";
                document.getElementById("playerAnswer").innerHTML="Answer Turn -"+player_1_name;
            }
            document.getElementById("output").innerHTML ="";
        }
