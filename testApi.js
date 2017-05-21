$(function() {
  var $info = $("#info");

  $.ajax({
    headers: {
      "X-Mashape-Key": "3yCGUZ3qnMmsh2MKDw4uR3HRBTeyp12jd8ZjsnAu2tEhtoYQZa",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    type: "GET",
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    success: function(data) {
      $.each(data, function(i, info) {
        $info.append("<li>" + info + "</li>");
      });
    }
  });
});

