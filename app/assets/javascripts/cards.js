// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  var clickCount = 0;
  var array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  // show card on click,
  $('.box').click(function(){
    if($(this).children(0).hasClass('hide')) {
      $(this).children(0).removeClass('hide').addClass('clicked');
      clickCount++;
      checkMatches();
      wonGame();
    }
  });

  $('#new_game').click(function(){
    array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
    var shuffledArray = shuffle(array);
    $('.box').each(function(){
      $(this).children(0).text(shuffledArray.pop())
    });
      clickCount = 0;
      $('p').addClass('hide');
  });
  // limit it to two cards, determine if it's a match, have alerts for if its a match or not.
  // if not a match, reset class to hide
  // once all items are matched, announce won game
  // don't allow matched items to be clicked again, or clicked items to be clicked again

  function checkMatches() {
    //when clickCount is 2, check for a match
    // if they match, alert winner and leave facing up
    //if they dont, alert and cards face down(addClass hide)
    //reset clickCount
    //remove clicked class
    if(clickCount==2){
      //check for matches
      if($('.clicked')[0].innerHTML == $('.clicked')[1].innerHTML){
        alert('You have a match. Congratulations!');
        clickCount = 0;
        $('.clicked').removeClass('clicked');
      } else {
        alert('No match. Try again!');
        clickCount = 0;
        $('.clicked').addClass('hide');
        $('.clicked').removeClass('clicked');
      }
    }
  }

  function wonGame() {
    if($('p').hasClass('hide')){
      // keep playing
    } else {
      alert('You WON!!!!!!!!');
    }
  }


  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


});
