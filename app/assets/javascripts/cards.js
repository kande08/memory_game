// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  var clickCount = 0;
  // show card on click,
  $('.box').click(function(){
    $(this).children(0).removeClass('hide').addClass('clicked');
    clickCount++;
    checkMatches();
    wonGame();
  });
  // limit it to two cards, determine if it's a match, have alerts for if its a match or not.
  // if not a match, reset class to hide
  // once all items are matched, announce won game

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
      clickCount = 0;
      $('p').addClass('hide');
    }
  }


});
