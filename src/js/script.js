var player=0;

function playerChoose(){
  document.getElementById('btns').addEventListener("click", function(){
    if(event.target.id == "btnX"){
      player = 1;
    }else if(event.target.id == "btnO") {
      player = 2;
    }
  });
}

function whoWon(){
  var arrayComp = ["","","","","","","","",""];
  document.getElementById('grid').addEventListener("click", function(){
    var compid = event.target.id;

    if(player==2){
      arrayComp.splice((compid-1),1,"x");
    }else if (player==1) {
      arrayComp.splice((compid-1),1,"o");
    }
    console.log(arrayComp);

    if((arrayComp[0]=="x")&&(arrayComp[1]=="x")&&(arrayComp[2]=="x")){
      alert("X won");
    }
    if((arrayComp[3]=="x")&&(arrayComp[4]=="x")&&(arrayComp[5]=="x")){
      alert("X won");
    }
    if((arrayComp[6]=="x")&&(arrayComp[7]=="x")&&(arrayComp[8]=="x")){
      alert("X won");
    }
    if((arrayComp[0]=="x")&&(arrayComp[3]=="x")&&(arrayComp[6]=="x")){
      alert("X won");
    }
    if((arrayComp[1]=="x")&&(arrayComp[4]=="x")&&(arrayComp[7]=="x")){
      alert("X won");
    }
    if((arrayComp[2]=="x")&&(arrayComp[5]=="x")&&(arrayComp[8]=="x")){
      alert("X won");
    }
    if((arrayComp[0]=="x")&&(arrayComp[4]=="x")&&(arrayComp[8]=="x")){
      alert("X won");
    }
    if((arrayComp[2]=="x")&&(arrayComp[4]=="x")&&(arrayComp[6]=="x")){
      alert("X won");
    }

    if((arrayComp[0]=="o")&&(arrayComp[1]=="o")&&(arrayComp[2]=="o")){
      alert("O won");
    }
    if((arrayComp[3]=="o")&&(arrayComp[4]=="o")&&(arrayComp[5]=="o")){
      alert("O won");
    }
    if((arrayComp[6]=="o")&&(arrayComp[7]=="o")&&(arrayComp[8]=="o")){
      alert("O won");
    }
    if((arrayComp[0]=="o")&&(arrayComp[3]=="o")&&(arrayComp[6]=="o")){
      alert("O won");
    }
    if((arrayComp[1]=="o")&&(arrayComp[4]=="o")&&(arrayComp[7]=="o")){
      alert("O won");
    }
    if((arrayComp[2]=="o")&&(arrayComp[5]=="o")&&(arrayComp[8]=="o")){
      alert("O won");
    }
    if((arrayComp[0]=="o")&&(arrayComp[4]=="o")&&(arrayComp[8]=="o")){
      alert("O won");
    }
    if((arrayComp[2]=="o")&&(arrayComp[4]=="o")&&(arrayComp[6]=="o")){
      alert("O won");
    }


  });
}

function placingXO(){

  document.getElementById('grid').addEventListener("click", function(){
    if(event.target.getAttribute('class')=='field'){
      if(event.target.hasChildNodes()){
        alert("Already placed");
      }else{
        if(player==1){

          var elem = document.createElement("P");
          elem.classList.add("classX");
          var text = document.createTextNode("X");
          elem.appendChild(text);
          event.target.appendChild(elem);
          player = 2;

        }else if(player==2){

          var elem = document.createElement("P");
          var text = document.createTextNode("O");
          elem.appendChild(text);
          event.target.appendChild(elem);
          player = 1;


        }
      }
    }

  });
}

playerChoose();
placingXO();
whoWon();
