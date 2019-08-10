var scoring = 0;
var timex = 10;
var highScore = 0;


var mathGen = function(){

  var first = Math.floor((Math.random()*10)+1);
  var second = Math.floor((Math.random()*(10-first)+1));
  rightAnswer= first+second;

  $('#numbers').empty();
  $('#numbers').append(first + '+' + second + ' =  ');
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
    scoring = 0;
    $('#score').empty();
    $('#score').append('0');
    timing();
    mathGen();

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
      $('#numbers').empty();
      $('#numbers').append('<button style="height:60px; color:blue" onclick="getReady()">Play</button>')
      if( scoring > highScore){
        highScore=scoring;
        $('#highscore').empty();
        $('#highscore').append(highScore);
      }
    }
  },1000);
}

$(document).ready(function(){
  $('input').val('');



  });
