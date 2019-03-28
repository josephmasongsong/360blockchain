


$(document).ready(function() {
    url ="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=POT.CN&outputsize=compact&apikey=Z6E4WSG15G3AB1U1";
    $.getJSON(url, function(result){

        var obj = result["Time Series (Daily)"]

        function reverseObject(object) {
          var newObject = {};
          var keys = [];
          for (var key in object) {
              keys.push(key);
          }
          for (var i = keys.length - 1; i >= 0; i--) {
            var value = object[keys[i]];
            newObject[keys[i]]= value;
          }
          return newObject;
        }


        $.each(reverseObject(obj), function(i, stock_term) {
            $.each(stock_term, function(i2, value) {

                var x = document.getElementById(i2.replace(/[^A-Z0-9]+/ig, "_"))
                $(x).html(value);

            });
        });
    });
});
