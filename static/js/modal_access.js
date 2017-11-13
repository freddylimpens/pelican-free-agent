/* If you've ever had the need to link directly to an open modal window with Bootstrap, here's a quick and easy way to do it:

Make sure your modal has an id:

<div class="modal" id="myModal" ... >

Then stick this bit of Javascript at at the end of your document:
 */

 $(document).ready(function() {
   /* When accessing a specific work via a modal, the url is updated*/
   $(window.location.hash).modal('show');
   $('a[data-toggle="modal"]').click(function(){
      window.location.hash = $(this).attr('href');
   });
   function revertToOriginalURL() {
        var original = window.location.href.substr(0, window.location.href.indexOf('#'))
        history.replaceState({}, document.title, original);
    }

    /* If using a specific url related to a work, we access the article directly*/
    var url = window.location.href;
    for (var i = 0; i < 40; i++) {
        //console.log(i);
        if (url.indexOf('portfolioModal'+i) != -1) {
          $(window.location.hash).modal('show');
        }
    }

    $('.modal').on('hidden.bs.modal', function () {
        revertToOriginalURL();
    });

 });



/*
Then you can send people to http://www.website.com/page.html#myModal and it'll load the page with the modal open.
*/
