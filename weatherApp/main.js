$(function getWeather() {
      var url = 'https://api.wunderground.com/api/ebdf1b44bbe1dc70/geolookup/conditions/q/autoip.json';
      $.getJSON(url, function(data) {
        $('#city').append(data.location.city + ", " + data.location.country);
        $('#temp').append(data.current_observation.feelslike_c + '&deg;C');
        $('#icon').attr('src', data.current_observation.icon_url);
        $('#condition').append(data.current_observation.weather);
        
        $("#c").click(function(){
          $("#f").removeClass("ui-state-active");
          $(this).addClass("ui-state-active");
          $("#temp").html(data.current_observation.feelslike_c + '&deg;C');
        });
        $("#f").click(function(){
          $("#temp").html(data.current_observation.feelslike_f + "&deg;F");
        });
    });
});

$(function() {
    $("input").checkboxradio({icon: false});
});