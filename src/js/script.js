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
