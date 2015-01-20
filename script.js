function simplify() {
  $(".display-post-vote").remove();
  $(".display-post-emotion").remove();
  $(".display-post-number").each(function() {
    var num = $(this).attr("id").replace("comment", "");
    $(this).closest(".display-post-wrapper-inner").prepend('<div style="position:absolute; left:-40px; top: 10px; font-size: 20px; color: #8f8bc5">' + num + '</div>');
  });
  $(".display-post-number").remove();
  $(".emotion-vote-user").remove();
  $(".display-post-reply").remove();
  $(".display-post-ip").remove();
  $(".display-post-status-leftside").css(
      {
        "padding": "5px",
        "padding-left": "15px",
        "border": "0px",
        "display": "table",
        "min-height": "37px",
        "width": "100%"

      });
  $(".display-post-story").css(
      {
        "padding-top": "4px"
      });
  $(".display-post-status-leftside").wrapInner("<div style='display:table-cell'></div>");
  $(".display-post-status-leftside").append("<div style='display:table-cell; width: 250px; vertical-align:top;' class='rightspace'></div>");
  $(".display-post-action").each(function() {
    //var r = $(this).detach();
    $(this).closest(".display-post-status-leftside").find(".rightspace").append($(this).html());
    $(this).remove();
  });
  $(".display-post-story-footer").remove();
  $(".display-post-wrapper-inner").each(function(index) {
    if (index % 2) {
      $(this).css({"background-color": "#1c1c38"})
    }
  });
  $(".display-post-wrapper").css(
      {
        "padding-top": "3px"
      });

}

$(document).keyup(function(e) {
  if(e.keyCode == 192) { // ~
    simplify();
  } 
});

