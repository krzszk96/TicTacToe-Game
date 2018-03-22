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
  var arrayCompX = [];
  var arrayCompO = [];
  document.getElementById('grid').addEventListener("click", function(){
    var compid = event.target.id;
    if(event.target.textContent=="X"){
      arrayCompX.push(compid);
    }else if(event.target.textContent=="O"){
      arrayCompO.push(compid);
    }
    //check if x won
    for (var i = 0; i < arrayCompX.length; i++) {
      if(arrayCompX[i]==1){
        for (var j = 0; j < arrayCompX.length; j++){
          if(arrayCompX[j]==2){
            for (var k = 0; k < arrayCompX.length; k++){
              if(arrayCompX[k]==3){alert("X won")}
            }
          }
        }
      }
    }
    for (var i = 0; i < arrayCompX.length; i++) {
      if(arrayCompX[i]==4){
        for (var j = 0; j < arrayCompX.length; j++){
          if(arrayCompX[j]==5){
            for (var k = 0; k < arrayCompX.length; k++){
              if(arrayCompX[k]==6){alert("X won")}
            }
          }
        }
      }
    }
    for (var i = 0; i < arrayCompX.length; i++) {
      if(arrayCompX[i]==7){
        for (var j = 0; j < arrayCompX.length; j++){
          if(arrayCompX[j]==8){
            for (var k = 0; k < arrayCompX.length; k++){
              if(arrayCompX[k]==9){alert("X won")}
            }
          }
        }
      }
    }
    for (var i = 0; i < arrayCompX.length; i++) {
      if(arrayCompX[i]==1){
        for (var j = 0; j < arrayCompX.length; j++){
          if(arrayCompX[j]==4){
            for (var k = 0; k < arrayCompX.length; k++){
              if(arrayCompX[k]==7){alert("X won")}
            }
          }
        }
      }
    }
    for (var i = 0; i < arrayCompX.length; i++) {
      if(arrayCompX[i]==2){
        for (var j = 0; j < arrayCompX.length; j++){
          if(arrayCompX[j]==5){
            for (var k = 0; k < arrayCompX.length; k++){
              if(arrayCompX[k]==8){alert("X won")}
            }
          }
        }
      }
    }
    for (var i = 0; i < arrayCompX.length; i++) {
      if(arrayCompX[i]==3){
        for (var j = 0; j < arrayCompX.length; j++){
          if(arrayCompX[j]==6){
            for (var k = 0; k < arrayCompX.length; k++){
              if(arrayCompX[k]==9){alert("X won")}
            }
          }
        }
      }
    }
    for (var i = 0; i < arrayCompX.length; i++) {
      if(arrayCompX[i]==1){
        for (var j = 0; j < arrayCompX.length; j++){
          if(arrayCompX[j]==5){
            for (var k = 0; k < arrayCompX.length; k++){
              if(arrayCompX[k]==9){alert("X won")}
            }
          }
        }
      }
    }
    for (var i = 0; i < arrayCompX.length; i++) {
      if(arrayCompX[i]==3){
        for (var j = 0; j < arrayCompX.length; j++){
          if(arrayCompX[j]==5){
            for (var k = 0; k < arrayCompX.length; k++){
              if(arrayCompX[k]==7){alert("X won")}
            }
          }
        }
      }
    }
//check if O won
for (var i = 0; i < arrayCompO.length; i++) {
  if(arrayCompO[i]==1){
    for (var j = 0; j < arrayCompO.length; j++){
      if(arrayCompO[j]==2){
        for (var k = 0; k < arrayCompO.length; k++){
          if(arrayCompO[k]==3){alert("O won")}
        }
      }
    }
  }
}
for (var i = 0; i < arrayCompO.length; i++) {
  if(arrayCompO[i]==4){
    for (var j = 0; j < arrayCompO.length; j++){
      if(arrayCompO[j]==5){
        for (var k = 0; k < arrayCompO.length; k++){
          if(arrayCompO[k]==6){alert("O won")}
        }
      }
    }
  }
}
for (var i = 0; i < arrayCompO.length; i++) {
  if(arrayCompO[i]==7){
    for (var j = 0; j < arrayCompO.length; j++){
      if(arrayCompO[j]==8){
        for (var k = 0; k < arrayCompO.length; k++){
          if(arrayCompO[k]==9){alert("O won")}
        }
      }
    }
  }
}
for (var i = 0; i < arrayCompO.length; i++) {
  if(arrayCompO[i]==1){
    for (var j = 0; j < arrayCompO.length; j++){
      if(arrayCompO[j]==4){
        for (var k = 0; k < arrayCompO.length; k++){
          if(arrayCompO[k]==7){alert("O won")}
        }
      }
    }
  }
}
for (var i = 0; i < arrayCompO.length; i++) {
  if(arrayCompO[i]==2){
    for (var j = 0; j < arrayCompO.length; j++){
      if(arrayCompO[j]==5){
        for (var k = 0; k < arrayCompO.length; k++){
          if(arrayCompO[k]==8){alert("O won")}
        }
      }
    }
  }
}
for (var i = 0; i < arrayCompO.length; i++) {
  if(arrayCompO[i]==3){
    for (var j = 0; j < arrayCompO.length; j++){
      if(arrayCompO[j]==6){
        for (var k = 0; k < arrayCompO.length; k++){
          if(arrayCompO[k]==9){alert("O won")}
        }
      }
    }
  }
}
for (var i = 0; i < arrayCompO.length; i++) {
  if(arrayCompO[i]==1){
    for (var j = 0; j < arrayCompO.length; j++){
      if(arrayCompO[j]==5){
        for (var k = 0; k < arrayCompO.length; k++){
          if(arrayCompO[k]==9){alert("O won")}
        }
      }
    }
  }
}
for (var i = 0; i < arrayCompO.length; i++) {
  if(arrayCompO[i]==3){
    for (var j = 0; j < arrayCompO.length; j++){
      if(arrayCompO[j]==5){
        for (var k = 0; k < arrayCompO.length; k++){
          if(arrayCompO[k]==7){alert("O won")}
        }
      }
    }
  }
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
