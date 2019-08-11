var scoring = 0;
var timex = 10;
var highScore = 0;
var sign ='';
var formula;


var maxNumber = function(){
  $('#slideNumber').empty();
  $('#slideNumber').append($('#slidingBar').val())
}

var adding = function(){
  sign = ' + ';
    formula = function(a,b){
      rightAnswer = a+b;
      return rightAnswer;
    }
}

var minusing = function(){
  sign = ' - ';
  formula = function(a,b){
    rightAnswer = a-b;
    return rightAnswer;
  }
}

var timesing = function(){
  sign = ' x ';
  formula = function(a,b){
    rightAnswer = a*b;
    return rightAnswer;
}
}

var halfing = function(){
  sign = ' / ';
  formula = function(a,b){
    rightAnswer = a/b;
    return rightAnswer;
}
}



var mathGen = function(){

  var ranges = $('#slidingBar').val();
  var first = Math.floor((Math.random()*ranges)+1);
  var second = Math.floor((Math.random()*(ranges)+1));
  formula(first,second);

  $('#numbers').empty();
  $('#numbers').append(first + sign + second + ' =  ');
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
      $('#answer').val("");
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
      $('#answer').empty();
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
  $('#answer').val('');
  adding();
  maxNumber();



  });
