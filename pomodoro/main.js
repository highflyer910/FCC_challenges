$(document).ready(function(){
  var breakLength = 5 * 60;
  var sessionLength = 25 * 60;
  var isSession = true;
  var timeLeft = sessionLength;
  var timerInterval;
  var clickInterval;
  
  function switchSession(playsound) {
    if (playsound) {
      var bellSound = new Audio('http://vocaroo.com/i/s0ZtuU1iUGyf');
      bellSound.play();
    }
  
  if (isSession) {
    timeLeft = breakLength;
    isSession = false;
  }
  else {
    timeLeft = sessionLength;
    isSession = true;
  }
    }
    /*Make sure seconds are in the correct format */
  function formatSeconds(seconds) {
    return seconds < 10 ? '0' + seconds : seconds;
  }
  
  //Update timer
  function updateTimer() {
    var minutesLeft;
    var secondsLeft;
    
    if (timeLeft <= 0) {
      switchSession(true);
    }
    
    minutesLeft = Math.floor(timeLeft/60);
    
    secondsLeft = timeLeft - minutesLeft * 60;
    
    $('#time').html(minutesLeft + ':' + formatSeconds(secondsLeft));
  }
  
  //Display Session and break length
  function updateTimerLengths() {
    if (sessionLength < 0) {
      sessionLength = 0;
    }
    if (breakLength < 0) {
      breakLength = 0;
    }
    $('#worklength').html(sessionLength / 60);
    $('#breaklength').html(breakLength / 60);
  }
  
  //Reset
  function init() {
    breakLength = 5 * 60;
    sessionLength = 25 * 60;
    timeLeft = sessionLength;
    isSession = true;
    clearInterval(timerInterval);
    clearInterval(clickInterval);
    if ($('.clock').hasClass('stop')) {
      $('#go').html('Go');
      
      $('.clock').removeClass('stop');
      $('.clock').addClass('go');
    }
    updateTimer();
    updateTimerLengths();
  }
  
  //Adjust time depending on which plus/minus button is clicked
  function iClickHandler(id) {
    switch(id) {
      case 'workplus':
        sessionLength += 60;
        if (isSession) {
          timeLeft += 60;
        }
        break;
      case 'workminus':
        sessionLength -= 60;
        if (isSession) {
          timeLeft -= 60;
        }
        break;
      case 'breakplus':
        breakLength += 60;
        if (!isSession) {
          timeLeft += 60;
        }
        break;
      case 'breakminus':
        breakLength -= 60;
        if (!isSession) {
          timeLeft -= 60;
        }
        break;
    }
    updateTimerLengths();
    updateTimer();
  }
  
  $('.pointer').on('mousedown', function(e) {
    var id = $(this).attr('id');
    iClickHandler(id);
    clickInterval = setInterval(function() {
      iClickHandler(id);
    }, 150);
  });
  
  $('html').on('mouseup', function(e) {
    clearInterval(clickInterval);
  });
  
  $('.clock').click(function() {
    if ($('.clock').hasClass('go')) {
      $('#go').html('Stop');
      $('.clock').removeClass('go');
      $('.clock').addClass('stop');
      timerInterval = 
        setInterval(function() {
        timeLeft--;
        updateTimer();
      }, 1000);
    } else {
      //stop the timer
      clearInterval(timerInterval);
      $('#go').html('Go');
      
      $('.clock').removeClass('stop');
      $('.clock').addClass('go');
    }
  });
  
  //reset button
  $('#reset').click(init);
  
  //switch button
  $('#switch').click(function() {
    switchSession(false);
    updateTimer();
  });
  
});