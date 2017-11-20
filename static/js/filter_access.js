
$(document).ready(function() {
          // put all your jQuery goodness in here.
          //document.getElementById('focusme').focus();
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

          window.onload = function () {
              if (location.hash === "#fdy") {
                      var filterValue='.fdy';
                      $('a[data-filter="'+filterValue+'"]').toggleClass('selected');
                      // apply filter
                      $grid.isotope({ filter: filterValue });
                      setTimeout(function() {
                          $( "[data-filter='.fdy']" ).trigger('click');
                      },10);


              } else if (location.hash === "#ccl") {
                      var filterValue='.ccl';
                      $('a[data-filter="'+filterValue+'"]').toggleClass('selected');
                      // apply filter
                      $grid.isotope({ filter: filterValue });
                      setTimeout(function() {
                          $( "[data-filter='.ccl']" ).trigger('click');
                      },10);


              }

          };


});
