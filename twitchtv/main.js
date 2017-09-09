var chans = ['thepracticaldev', 'noobs2ninjas','freecodecamp', 'thelarkinn']
chans.forEach(function(channel){

$.ajax({
    url: 'https://api.twitch.tv/kraken/channels/' + channel + '?client_id=xrv53lx1skq1yua4jjrrpilref53ue',
    type: 'GET', 
    data: {}, 
    dataType: 'json',
  
    success: function(data) { 
$('.tStats').append('<a href="https://twitch.tv/' + channel + '" target= "_blank"><div class="row"><div class="col-xs-2 logo"><img src="' + data.logo + '" class="img-responsive ' + channel + 'logo"></div> <div class="col-xs-3 name"><p>' + data.display_name + '</p></div><div class="col-xs-7 status status' + channel +'"><p class="game">' + data.game + '</p>' + '</div></div></a>');
      
//ONLINE CHECK     
      
$.ajax({
    url: 'https://api.twitch.tv/kraken/streams/' + channel + '?client_id=xrv53lx1skq1yua4jjrrpilref53ue',
    type: 'GET', 
    data: {}, 
    dataType: 'json',
  
    success: function(data) {
      if (data.stream == null) {
        $('.status' + channel).text('Offline');
        $('.'+ channel + 'logo').addClass('offline');
   } else {
     
      }
    },
    error: function(err) { alert(err); },

});     
//end of online check        
    },
    error: function(err) { alert(err); },
});
 });

$(document).ready(function() {

  $('#add').on('click', function(){
   var str = document.getElementById('addChan').value; 
    

$.ajax({
    url: 'https://api.twitch.tv/kraken/channels/' + str + '?client_id=xrv53lx1skq1yua4jjrrpilref53ue',
    type: 'GET', 
    data: {}, 
    dataType: 'json',
  
    success: function(data) { 
$('.tStats').append('<a href="https://twitch.tv/' + str + '" target= "_blank"><div class="row"><div class="col-xs-2 logo"><img src="' + data.logo + '" class="img-responsive ' + str + 'logo"></div> <div class="col-xs-3 name"><p>' + data.display_name + '</p></div><div class="col-xs-7 status status' + str +'"><p class="game">' + data.game + '</p>' + '</div></div></a>');
     
//ONLINE CHECK     
      
$.ajax({
    url: 'https://api.twitch.tv/kraken/streams/' + str + '?client_id=xrv53lx1skq1yua4jjrrpilref53ue',
    type: 'GET', 
    data: {}, 
    dataType: 'json',
  
    success: function(data) { 
      if (data.stream == null) {
        $('.status' + str).text('Offline');
        $('.'+ str + 'logo').addClass('offline');
   } else {
     
      }
    },
    error: function(err) { alert(err); },

});
          
//end of online check    
      
    },
    error: function(err) { alert("That channel does not exist."); },
});
 });
  });
                  
                  
   $("#addChan").keypress(function(event) {
        if (event.which == 13) {
  var str = document.getElementById('addChan').value; 
    
$.ajax({
    url: 'https://api.twitch.tv/kraken/channels/' + str + '?client_id=xrv53lx1skq1yua4jjrrpilref53ue',
    type: 'GET', 
    data: {}, 
    dataType: 'json',
  
    success: function(data) { 
$('.tStats').append('<a href="https://twitch.tv/' + str + '" target= "_blank"><div class="row"><div class="col-xs-2 logo"><img src="' + data.logo + '" class="img-responsive ' + str + 'logo"></div> <div class="col-xs-3 name"><p>' + data.display_name + '</p></div><div class="col-xs-7 status status' + str +'"><p class="game">' + data.game + '</p>' + '</div></div></a>');
     
//ONLINE CHECK     
      
$.ajax({
    url: 'https://api.twitch.tv/kraken/streams/' + str + '?client_id=xrv53lx1skq1yua4jjrrpilref53ue',
    type: 'GET', 
    data: {}, 
    dataType: 'json',
  
    success: function(data) { 
      if (data.stream == null) {
        $('.status' + str).text('Offline');
        $('.'+ str + 'logo').addClass('offline');
   } else {
      }
    },
    error: function(err) { alert(err); },

});     
//end of online check        
    },
    error: function(err) { alert("That channel does not exist."); },

});
 }; 
        });
