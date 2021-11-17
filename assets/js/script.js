"use strict";
$(document).ready(function () {
    // small screen toggler 
    $("#small_screen_nav_toggler").click(function (e) {
        $("#small_screen_navbar").toggleClass("show");
       
        if ($("#small_screen_nav_toggler i").hasClass("fa-navicon")) {
            $("#small_screen_nav_toggler i").removeClass("fa-navicon");
            $("#small_screen_nav_toggler i").addClass("fa-times");
        }
        else {
            $("#small_screen_nav_toggler i").removeClass("fa-times");
            $("#small_screen_nav_toggler i").addClass("fa-navicon");
        }
    });

    let animated = new Typed("#animated_title",{
        strings:["مجهز به تیمی مجرب ^1000"," ^1000تضمین عملکرد "," ^1000استفاده از متریال درجه یک "],
        typeSpeed : 60,
        loop : true,
        backSpeed: 20,
        cursorChar: '',

    })
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        rtl : true,
        responsive : 
        {
            0:
            {
                items:1
            },
            576 : 
            {
                items : 2
            },
            768 : 
            {
                items : 3
            },
            992 : 
            {
                 items : 4
            },
            1100 : 
            {
                items : 5
            }

        }
    });
});
