/**
 * JS Code to toggle display based on the menu selection.
 * 
 */
let maxWidth = window.matchMedia("(max-width: 800px)")


$("#logo").css({marginLeft:"260px"});
//document.getElementById("logo").style.marginLeft = "260px";
$("#main").css({marginLeft:"260px"});
$(".navbar-toggler-icon").css('margin-right',"0");

if (maxWidth.matches){
  $("#toggle-nav").css({marginRight: 0});
  $("#sideNavigation").hide();
  $("#toggle-nav").hide();
}
const openNav = () => {

  if (maxWidth.matches)
  {
    $("#toggle-nav").show();
    $(".navbar-toggler-icon").show();
    $(".navbar-toggler").show();
    $("#toggle-nav").css('margin-right',"0");
    
  }

  $("#logo").css({marginLeft:"200px"});
  $('.navbar-collapse').collapse('hide');
  $("#sideNavigation").show();
  $("#sideNavigation").css("width","200px");
  $("#main").css({marginLeft:"250px"});
  $("#rightNavContainer").css("width",0);
  
  
}

const  openRightNav = () =>{
  $("#sideNavigation").css("width",0);
  $("#rightNavContainer").css({marginLeft:0});
  $("#rightNavContainer").css("width","200px");
  $("#sideNavigation").css("width",0);

}
const closeRightNav=()=> {
    $("#rightNavContainer").css("width",0);
 }
 
const closeNav =() => {
  $("#sideNavigation").css("width",0);
   $("#main").css({marginLeft:0});
   $("#logo").css({marginLeft:0});
}

function loadContent(selector){
  $("#loadOnClick").html($(selector).html());
  $("#sideNavigation").css("width",0);
  $("#logo").css({marginLeft:0});
  //$("#main").css({marginLeft:0});
   if (maxWidth.matches)
   {
        $("#main").css({marginLeft:0});
        $("#logo").css({marginLeft:0});
      }
   $(".navbar-toggler-icon").css('margin-right',"0px");
};

function loadConsumerContent(selector){
    $(selector).slideToggle("slow").focus();
    $("#consumer-protection-container").css({marginTop:0});
     $("#consumer-protection-container").focus();
};

$(document).ready(function(){
  loadContent("#training");
   $("#sideNavigation").css("width","200px");
  if (maxWidth.matches){
    $("#sideNavigation").hide();
  }
  });