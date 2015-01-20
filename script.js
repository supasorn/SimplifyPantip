function simplify() {
  $(".display-post-status-leftside").css(
      {
        "padding": "3px",
        "padding-left": "15px",
        "border": "0px",
        "display": "table",
        "min-height": "35px",
        "width": "100%",
        "font-size": "13px"
      });
  $(".display-post-story").css({ "padding-top": "4px" });
  $(".display-post-title").css({ "padding-top": "8px" });
  $(".logo-banner").css({"height": "35px"});
  $(".logo-banner .container-outer").css({"height": "35px"});

  $(".display-post-number").not(".done").each(function() {
    var num = $(this).attr("id").replace("comment", "");
    var ofs = "-" + (10 + num.length * 10) + "px";
      
    $(this).closest(".display-post-wrapper-inner").prepend('<div style="position:absolute; left:' + ofs + '; top: 10px; font-size: 20px; color: #8f8bc5">' + num + '</div>');
    $(this).addClass("done");
  });

  var e2 = $(".display-post-wrapper-inner .display-post-status-leftside").not(".done");
  e2.wrapInner("<div style='display:table-cell'></div>");
  e2.append("<div style='display:table-cell; width: 250px; vertical-align:top;' class='rightspace'></div>");
  e2.addClass("done");

  $(".display-post-wrapper-inner .display-post-action").each(function() {
    $(this).closest(".display-post-status-leftside").find(".rightspace").append($(this).html());
    $(this).remove();
  });

  var e1 = $(".main-post").not(".done").find(".display-post-status-leftside").last();
  e1.wrapInner("<div style='display:table-cell'></div>");
  e1.append("<div style='display:table-cell; width: 250px; vertical-align:top;' class='rightspace'></div>");
  e1.find(".display-post-action").each(function() {
    $(this).closest(".display-post-status-leftside").find(".rightspace").append($(this).html());
    $(this).remove();
  });
  $(".main-post").not(".done").find(".display-post-favourite").parent().remove();
  $(".main-post").addClass("done");


  $(".display-post-wrapper-inner").each(function(index) {
    $(this).css({"background-color": index % 2 ? "#1b1b35" : "#222244"});
    //$(this).css({"background-color": index % 2 ? "#1c1c38" : "#222244"});
  });
  $(".display-post-wrapper").css({ "padding-top": "3px", });
  $(".display-post-vote").remove();
  $(".display-post-edit").remove();
  $(".display-post-emotion").remove();
  $(".display-post-number").remove();
  $(".emotion-vote-user").remove();
  $(".display-post-reply").remove();
  $(".display-post-ip").remove();
  $(".display-post-story-footer").remove();
  $(".display-post-tag-wrapper").remove();
  $(".ads-topbillboard").remove();
  $(".logo-banner").not(".done").find("a").last().remove();
  $(".logo-banner").addClass("done");
  //$(".icon-memberbadge-mini").remove();
}


var timer;
$(".container-inner").bind("DOMSubtreeModified", function() {
  timer = setTimeout(simplify, 750);
});

//simplify();
//var timer = setInterval(simplify, 1000);
//$(document).ready(function(e) {
  //simplify();
  //clearInterval(timer);
//});
//$(document).keyup(function(e) {
  //if(e.keyCode == 192) { // ~
    //simplify();
  //} 
//});
