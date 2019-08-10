var scoring = 0;
var timex = 10;

var mathGen = function(){

  var first = Math.floor((Math.random()*10)+1);
  var second = Math.floor((Math.random()*(10-first))+1);
  rightAnswer= first+second;

  $('#numbers').empty();
  $('#numbers').append(first + ' + ' + second + ' =  ');
  $('#answer').focus();



  var timeout;
  $('input').on('input', function(){
    clearTimeout(timeout);
    timeout=setTimeout(function(){
      compare();
    },200);
});

}

var compare = function(){
    var userAnswer = parseFloat($('#answer').val());
    if( userAnswer === rightAnswer){

      scoring += 1;
      $('#score').empty();
      $('#score').append(scoring);
      $('input').val("");
      timex+=1;
      $('#timer').empty();
      $('#timer').append(timex);
      mathGen();

  }
}


var getReady = function(){
  var play = confirm('READY TO PLAY?');
  if (play === true){
    $('#score').empty();
    $('#score').append('0');
    timing();
    mathGen();
  }else{
    $('#numbers').empty();
    $('#numbers').append('<button style="height:60px" onclick="getReady()">Play</button>')
  }
}


var timing = function(){
    timex=10;
    var x = setInterval(function(){
    timex -=1;
    $('#timer').empty();
    $('#timer').append(timex);

    if(timex < 0) {
      clearInterval(x);
      alert('gameover');
      $('#timer').empty();
      $('#timer').append('10');
      $('input').empty();
      getReady();
    }
  },1000);
}

$(document).ready(function(){
  $('input').val('');
  getReady();


  });
