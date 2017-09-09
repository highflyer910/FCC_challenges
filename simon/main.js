$(document).ready(function() {
  var powerOn = false;
  var strictOn = false;
  var playerTurn = false;
  var $count = $('.count');
  var $cBtn = $('.colorBtn');
  var round = 0;
  var click = -1;
  var checked = false;
  var correctSequence = [];
  var playerSequence = [];
  var blinkText;
 
  var soundArr = [new Audio('https://a.clyp.it/0i5alwhh.mp3'),
    new Audio('https://a.clyp.it/kkua01bd.mp3'),
    new Audio('https://a.clyp.it/bv3lfflv.mp3'),
    new Audio('https://a.clyp.it/sknd4aru.mp3'),
    new Audio('https://a.clyp.it/2jqmx1j3.mp3'),
    new Audio('https://a.clyp.it/qwns04zo.mp3'),
    new Audio('https://a.clyp.it/1ssyaqql.mp3'),
    new Audio('https://a.clyp.it/lbrad43v.mp3'),
    new Audio('https://a.clyp.it/cmtr2vrv.mp3')
  ];

  $('.powerSwitch').click(function() {
    clearInterval(blinkText);

    if (!powerOn) gameOn();
    else gameOff();
  });

  $('#startBtn').click(function() {
    clearInterval(blinkText);
    if (powerOn) startGame();
  });

  $('#strictBtn').click(function() {
    if (powerOn && !strictOn) {
      $('.strictLight').css({
        background: 'yellow'
      });
      strictOn = true;
    } else if (powerOn) {
      $('.strictLight').css({
        background: 'black'
      });
      strictOn = false;
    }

  });

  function gameOff() {
    powerOn = false;
    strictOn = false;
    playerTurn = false;
    checked = false;
    click = -1;
    round = 0;
    $count.html('');
    $('.powerSwitch').css({
      left: '5%'
    });
    $('.strictLight').css({
      background: 'black'
    });
    stopAudio();
  }

  function gameOn() {
    $('.powerSwitch').css({
      left: '55%'
    });
    powerOn = true;
    $count.html('--');
    soundArr[0].play();
  }

  function startGame() {
    correctSequence = [];
    playerSequence = [];
    playerTurn = false;
    checked = false;
    click = -1;
    round = 0;
    stopAudio();
    generateLight();
   }

  function generateLight() {
    round++;
    updateCounter();
    playerSequence = [];
    click = -1;
    correctSequence.push(Math.floor(Math.random() * 4) + 1);
    lightShow(0);
  }

  function lightShow(i) {
    updateCounter();
    lightOn(correctSequence[i], i);
    i++;
    if (i < correctSequence.length) {
      setTimeout(lightShow(i), 1600);
    }
    else {
      playerTurn = true;
      checked = false;
    }
  }

  function lightOn(lightNum, index) {
    setTimeout(function() {
      $('#' + lightNum).addClass('litUp');
      soundArr[lightNum].play();
    }, 200 + (800 * index));

    setTimeout(function() {
      $('#' + lightNum).removeClass('litUp');
    }, (800 * index) + 800);

  }

  $cBtn.mousedown(function() {
    if (playerTurn && !($('.colorBtn').hasClass('litUp'))) {
      $(this).addClass('litUp');
      soundArr[parseInt($(this).attr('id'))].play();
    }
  });
  $cBtn.mouseup(function() {
    if (playerTurn) {
      $(this).removeClass('litUp');
    }
  });
  $cBtn.click(function() {
    if (playerTurn && !($('.colorBtn').hasClass('litUp')) && !checked) {
      click++;
      playerSequence[click] = parseInt($(this).attr('id'));
      checkSequence();
    }
  });

  function checkSequence() {
    if (playerSequence[click] === correctSequence[click] && playerSequence.length < correctSequence.length) {
      checked = false;
      return;
    }
    else if (playerSequence[click] !== correctSequence[click] && strictOn) {
      return gameOver();
    }
    else if (playerSequence[click] !== correctSequence[click] && !strictOn) {
      return tryAgain();
    }
  
    else if (playerTurn && (playerSequence.length === correctSequence.length) && (playerSequence.join('') === correctSequence.join(''))) {
      
      if (correctSequence.length < 20) {
        setTimeout(function() {
          soundArr[8].play();
        }, 200);
        playerTurn = false;
        playerSequence = [];
        setTimeout(function() {
          generateLight();
        }, 800);
        checked = true;
      }
      else gameWon();

    }

  }

  function tryAgain() {
    checked = true;
    click = -1;
    playerTurn = false;
    playerSequence = [];
    $count.html('!!');
    soundArr[5].play();
    navigator.vibrate(500);
    setTimeout(function() {
      lightShow(0);
    }, 1000);
  }

  function updateCounter() {
    if (round < 10) $count.html('0' + round);
    else $count.html(round);
  }

  function gameOver() {
    click = -1;
    playerTurn = false;
    playerSequence = [];
    correctSequence = [];
    soundArr[6].play();
    blinkText = setInterval(function() {
      if ($count.html() === 'XX') $count.html('');
      else($count.html('XX'));
    }, 400);
  }

  function gameWon() {
    click = -1;
    playerTurn = false;
    playerSequence = [];
    correctSequence = [];
    soundArr[7].play();
    blinkText = setInterval(function() {
      if ($count.html() === ':)') $count.html('');
      else($count.html(':)'));
    }, 400);
  }

  function stopAudio() {
    soundArr.forEach(function(x) {
      x.pause();
    });
  }

});