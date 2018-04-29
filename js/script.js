var player=0;
// var mode=0;

// function modeChoose(){
//   document.getElementById('modebtns').addEventListener("click", function(){
//     if(event.target.id == "1v1"){
//       mode = 1;
//     }else if(event.target.id == "1vc") {
//       mode = 2;
//     }
//     if(mode ==1){
//       playerChoose();
//       placingXO();
//       reset();
//     }
//     else if (mode==2) {
//       console.log("tak2");
//     }
//   });
// }

function playerChoose(){
  document.getElementById('btns').addEventListener("click", function(){
    if(event.target.id == "btnX"){
      player = 1;
    }else if(event.target.id == "btnO") {
      player = 2;
    }
  });
}
function modalPopup(){
  var modal = document.getElementById("myModal");
  var span = document.getElementById("close");
  var txt1 = document.getElementById("wintxt1");
  var txt2 = document.getElementById("wintxt2");
  var draw = document.getElementById("drawtxt");

  modal.style.display = "block";
  if(player==2){
    txt1.style.display = "block";
    txt2.style.display = "none";
    draw.style.display = "none";
  }
  else if (player ==1) {
    txt2.style.display = "block";
    txt1.style.display = "none";
    draw.style.display = "none";
  }else if (player ==0) {
    txt2.style.display = "none";
    txt1.style.display = "none";
    draw.style.display = "block";

  }

  span.onclick = function(){
    modal.style.display = "none";
  }
  window.onclick = function(){
    if(event.target == modal){
      modal.style.display = "none";
    }
  }
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


    if((arrayComp[0]=="x")&&(arrayComp[1]=="x")&&(arrayComp[2]=="x")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[3]=="x")&&(arrayComp[4]=="x")&&(arrayComp[5]=="x")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[6]=="x")&&(arrayComp[7]=="x")&&(arrayComp[8]=="x")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[0]=="x")&&(arrayComp[3]=="x")&&(arrayComp[6]=="x")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[1]=="x")&&(arrayComp[4]=="x")&&(arrayComp[7]=="x")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[2]=="x")&&(arrayComp[5]=="x")&&(arrayComp[8]=="x")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[0]=="x")&&(arrayComp[4]=="x")&&(arrayComp[8]=="x")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[2]=="x")&&(arrayComp[4]=="x")&&(arrayComp[6]=="x")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }

    if((arrayComp[0]=="o")&&(arrayComp[1]=="o")&&(arrayComp[2]=="o")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[3]=="o")&&(arrayComp[4]=="o")&&(arrayComp[5]=="o")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[6]=="o")&&(arrayComp[7]=="o")&&(arrayComp[8]=="o")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[0]=="o")&&(arrayComp[3]=="o")&&(arrayComp[6]=="o")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[1]=="o")&&(arrayComp[4]=="o")&&(arrayComp[7]=="o")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[2]=="o")&&(arrayComp[5]=="o")&&(arrayComp[8]=="o")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[0]=="o")&&(arrayComp[4]=="o")&&(arrayComp[8]=="o")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }
    if((arrayComp[2]=="o")&&(arrayComp[4]=="o")&&(arrayComp[6]=="o")){
      arrayComp = ["","","","","","","","",""];
      modalPopup();
      reset();
    }

    var t1 = document.getElementById('1').hasChildNodes();
    var t2 = document.getElementById('2').hasChildNodes();
    var t3 = document.getElementById('3').hasChildNodes();
    var t4 = document.getElementById('4').hasChildNodes();
    var t5 = document.getElementById('5').hasChildNodes();
    var t6 = document.getElementById('6').hasChildNodes();
    var t7 = document.getElementById('7').hasChildNodes();
    var t8 = document.getElementById('8').hasChildNodes();
    var t9 = document.getElementById('9').hasChildNodes();
    if((t1==true)&&(t2==true)&&(t3==true)&&(t4==true)&&(t5==true)&&(t6==true)&&(t7==true)&&(t8==true)&&(t9==true)){
      arrayComp = ["","","","","","","","",""];
      player=0;
      modalPopup();
      reset();
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
          var text = document.createTextNode("X");
          elem.appendChild(text);
          event.target.appendChild(elem);
          elem.classList.add("cellX");
          player = 2;

        }else if(player==2){

          var elem = document.createElement("P");
          var text = document.createTextNode("O");
          elem.appendChild(text);
          event.target.appendChild(elem);
          elem.classList.add("cellO");
          player = 1;

        }
      }
    }

  });
  whoWon();
}

function reset(){
  for(var i=0; i<9; i++){
    if(document.getElementById(i+1).hasChildNodes()){
      var toRemove = document.getElementById(i+1);
      toRemove.removeChild(toRemove.childNodes[0]);
    }
  }
  player=0;
}

playerChoose();
placingXO();
