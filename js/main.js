$(function() {
  // Handler for .ready() called.
  $("#newButton").on("click", function(){
  // Click event handler
    $.getJSON("bible-api.com/john 3:16", function(json){
      $("#proverbContainer").html(JSON.stringify(json));
    });
  });
});


function getNewProverb(){
  $.getJSON("bible-api.com/john 3:16", function(json){
    $("#proverbContainer").html(JSON.stringify(json));
  });
}


app.listen(3000, function(){
  console.log("SERVER IS RUNNING!");
});
