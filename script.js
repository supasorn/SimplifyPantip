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
  $(".loadmore-bar").css(
      {
        "margin-top": "5px",
        "margin-bottom": "3px",
        "line-height": "20px"
      });
  $(".display-post-story-footer").css({ "margin-top": "3px" });

  var authorId = $(".display-post-name.owner").attr('id');
  $(".display-post-number").not(".done").each(function() {
    var num = $(this).attr("id").replace("comment", "");
    var ofs = "-" + (10 + num.length * 10) + "px";
    
    var postA = $(this).closest(".display-post-status-leftside").find("a.display-post-name");
    var postId = postA.attr("href");
    
    var dec = 'color: #8f8bc5';
    if (postId != undefined && postId.replace("/profile/", "") == authorId) {
      dec = 'color: white; font-weight: bold;';
      postA.append(" [author]");
    }

    $(this).closest(".display-post-wrapper-inner").prepend('<div class="commentnum" style="position:absolute; left:' + ofs + '; top: 10px; font-size: 20px; cursor: pointer; ' + dec + '">' + num + '</div>');
    $(this).addClass("done");
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

  var e2 = $(".display-post-wrapper-inner .display-post-status-leftside").not(".done");
  e2.wrapInner("<div style='display:table-cell'></div>");
  e2.append("<div style='display:table-cell; width: 250px; vertical-align:top;' class='rightspace'></div>");
  e2.addClass("done");

  $(".display-post-wrapper-inner .display-post-action").not(".done").each(function() {
    var rightspace = $(this).closest(".display-post-status-leftside").find(".rightspace");
    rightspace.append($(this).html());
    rightspace.find(".display-post-emotion").remove();
    rightspace.find(".display-post-vote").remove();
    rightspace.find(".display-post-ip").remove();
    $(this).addClass("done");
  });

  $(".commentnum").unbind().click(function() {
    //$(this).parent().find(".display-post-story-footer").toggle();
    $(this).parent().find(".display-post-story-footer").slideToggle();
  });

  $(".display-post-wrapper-inner").not(".done").each(function(index) {
    $(this).css({"background-color": index % 2 ? "#1b1b35" : "#222244"});
    $(this).addClass("done");
  });
  $(".display-post-story-footer").not(".done").hide().addClass("done");
  $(".display-post-story-footer .display-post-avatar").remove();
  
  $(".display-post-wrapper").css({ "padding-top": "3px", });
  $(".display-post-edit").remove(); // trash bin icon
  $(".display-post-number").hide(); // if removed, can't +
  $(".display-post-tag-wrapper").remove();

  $(".ads-topbillboard").remove();
  $(".logo-banner").not(".done").find("a").last().remove();
  $(".logo-banner").addClass("done");
}


var timer;
$(".container-inner").bind("DOMSubtreeModified", function() {
  clearTimeout(timer);
  timer = setTimeout(simplify, 500);
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
