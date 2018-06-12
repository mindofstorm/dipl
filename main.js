$(document).ready(function (){
    $('[data-toggle="tooltip"]').tooltip();
    
    $("#userb").click(function(){
        $("#guestb").collapse('hide');
    });
    $("#guestb").click(function(){
        $("#usertab").collapse('hide');
    });

    // $('[data-toggle="tooltip"]').tooltip();
    // $("#hej").hover(function(){
    //     $(this).css("background-color", "yellow");
    // }, function(){
    //     $(this).css("background-color", "pink");
    // });

    // $("#pills-profile-tab").click(function () {
    //     if ($("#pills-profile-tab").hasClass("active")){
    //     $("#pills-home-tab").addClass("active");
    //     }
    // });
});
function StageCrumbs1() {
    $("#nav-profile-tab").css("background-color", "#3498db");
    $("#booking-form").addClass("madajj");
    $("#nav-contact-tab").css("background-color", "#3498db");
}

function StageCrumbs2() {
    $("#booking-form").removeClass("madajj");
    $("#booking-form").addClass("madaj");
    $("#nav-home-tab").css("background-color", "#fa5ba5");
    $("#nav-profile-tab").css("background-color", "#fa5ba5");
    $("#nav-contact-tab").css("background-color", "#3498db");
}


function StageCrumbs3() {
    $("#booking-form").removeClass("madajj");
    $("#booking-form").addClass("madaj");
    $("#nav-home-tab").css("background-color", "#fa5ba5");
    $("#nav-profile-tab").css("background-color", "#fa5ba5");
    $("#nav-contact-tab").css("background-color", "#fa5ba5");
}
function OpenService2(){
    $("#nav-profile-tab").trigger("click");
}
function OpenService3() {
    $("#nav-contact-tab").trigger("click");
}