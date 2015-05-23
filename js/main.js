
var s,
    app = {
        settings : {
        },
        init: function() {
            //Global settings
            s = this.settings;

            // initalize
            this.initalizers();
            this.bindUiActions();
            this.fixes();
            this.animations();
        },
        bindUiActions: function (){
            // Should include all JS user interactions
            var self = this;

            // Show/hide the navigation when scrolling down
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();
                $('.navbar').toggleClass('active', scroll >= 200  );
            });

            $(".scroll").click( function(){
                // $(this.hash).children().removeClass("hidden");

                var href = $(this).attr('href');

                var distanceFromTop = $(href).offset().top;

                $('html, body').animate({
                    scrollTop : distanceFromTop - 50
                });
                return false;
            });

            $( ".navbar, .scroll" ).mouseenter(function() {
                $('.hidden').removeClass('hidden').addClass("animated fadeIn");
            });

        },
        initalizers: function (){
            // Initalize any plugins and functions when page loads

             // tracks position and adds active class to nav items
            $('body').scrollspy({
                target: '.navbar',
                offset: 100
             });

            // Turn on stellar Parallax for header
            $.stellar({
                horizontalScrolling: false,
                verticalScrolling: true
            });

        },
        fixes: function(){
            // Fixes issue with bootstrap not closing on mobile
            $('.navbar-collapse').children().children().on('click', function() {
                $(this).parent().parent().removeClass('in').addClass('collapse');
            });
        },
        animations: function() {

            // if (matchMedia('only screen and (max-width: 992px)').matches) {
            // // $('#contact').css("background-color","#34495e");
            // }
            // if (matchMedia('only screen and (min-width: 1400px)').matches) {
            //         // $('#contact').css("background-color","#34495e");
            // }
            // if (matchMedia('only screen and (min-width: 992px)').matches) {
                $('#about, #quote-block, #latest, #contact').children().addClass('visually-hidden');

                $('#about, #quote-block, #latest, #contact').waypoint( function (direction) {
                    $(this).children().removeClass('visually-hidden').addClass("animated fadeInUp");
                    // $('.about-title, .about-p1').removeClass("hidden").addClass("animated fadeInDown");
                    // $('.about-hr').removeClass("hidden").addClass("animated fadeIn delay-1");
                    // $(' .about-p2, .about-p3').removeClass("hidden").addClass("animated fadeIn delay-2");
                    // $(' .about-p4').removeClass("hidden").addClass("animated fadeIn delay-3");
                    // $(' .quote').removeClass("hidden").addClass("animated fadeIn delay-4");

                    // $('.about-secondary').removeClass("hidden").addClass("animated fadeIn delay-5");
                    // $(' .form-container, .hire-info').removeClass("hidden").addClass("animated fadeIn delay-6");
                    // $('#contact').css("background-color","#34495e");

                },{ offset: '50%' });

            // }
        }
    };

$(document).ready(function(){
    // Start the app when ready
    app.init();
});
