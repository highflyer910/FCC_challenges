$(document).ready(function() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", update)
});

$("#getMessage").on("click", function(){
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", update)
});

function update(response) {
    var quoteText = response.quoteText;
    var quoteAuthor = response.quoteAuthor;
    var html = "";
    var tweet = "https://twitter.com/intent/tweet?text=\"" + quoteText.trim() + "\" " + quoteAuthor;
    
    html += "<div class='quote'>\"" + quoteText.trim() + "\"</div>";
    if (quoteAuthor.length > 0) {
      html += "<div class='author float-right'>- <em>" + quoteAuthor + "</em></div>";
    }
    
    $(".message").html(html);
    $("#tweetButton").attr("href", tweet);
  }