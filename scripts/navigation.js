$(function(){
    $("#includeNavigation").load("../navigation.html");
});

function toggle () {
    $(".hamburger").toggleClass("change");

    if($('div.hamburger').hasClass('change')) {
        $(".nav-hamburger-content").show();
        $(".nav-hamburger-content").addClass("show");
    } else {
        $(".nav-hamburger-content").hide(); 
    }
}
