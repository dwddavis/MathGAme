var scoring = 0;

var mathGen = function(){
  var rightAnswer=0;
  var first = Math.floor((Math.random()*50)+1);
  var second = Math.floor((Math.random()*(50-first))+1);
  rightAnswer= first+second;

  $('#numbers').empty();
  $('#numbers').append(first + ' + ' + second + ' =  ');




  $('input').on('input', function(){


    var userAnswer = parseFloat($('#answer').val());
    if( userAnswer === rightAnswer){

      scoring += 1;
      $('#score').empty();
      $('#score').append(scoring);
      $('input').val("");
      rightAnswer=0;
      mathGen();

  }
});


}

var getReady = function(){
  var play = confirm('READY TO PLAY?');
  if (play === true){
    timing();
    mathGen();
  }else{
    $('#numbers').empty();
    $('#space').append('<button onclick="getReady()">Play</button>')
  }
}


var timing = function(){
    var timex = 10;

    var x = setInterval(function(){
    timex -=1;
    $('#timer').empty();
    $('#timer').append(timex);

    if(timex < 0) {
      clearInterval(x);
      alert('gameover');
      $('#timer').empty();
      $('#timer').append('10');
      getReady();
    }

  },1000);

}

$(document).ready(function(){
  $('input').val('');
  getReady();


  });
