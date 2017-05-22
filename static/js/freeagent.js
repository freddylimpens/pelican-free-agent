/*!
 * ϑWave Studio - Free Agent Bootstrap Theme (http://thetawave.studio)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});




$(document).ready(function() {
        // put all your jQuery goodness in here.
        document.getElementById('focusme').focus();
        // **** Isotope hooks **** //
        $grid = $(".grid");
        // layout Masonry after each image loads
        $grid.imagesLoaded().progress( function() {
            $grid.isotope({
                "itemSelector": ".grid-item",
                "masonry":
                  {"column-width" : ".grid-item"}
            });
        });
        // # filter items on button click
        $('a.filter').on( 'click', function() {
            // close modal if open
            $('.modal').modal('hide');
            // toggle selected for all filter with same name
            $('.filter.selected').removeClass('selected');
            var filterValue = $(this).attr('data-filter');
                // console.log("Filter value : ", filterValue);
            $('a[data-filter="'+filterValue+'"]').toggleClass('selected');
            // apply filter
            $grid.isotope({ filter: filterValue });
        });

        $('.email').click(function() {
            login = $(this).html().replace('<span class="iamnotaat"></span>', '@')
            window.location.href = 'mailto:' + login + 'limpica.net';
            console.log("hoock");
        });
    });
