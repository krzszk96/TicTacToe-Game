var player=0;

function playerChoose(){
  document.getElementById('btns').addEventListener("click", function(){
    if(event.target.id == "btnX"){
      player = 1;
    }else {
      player = 2;
    }
  });
}
playerChoose();
