/* If you've ever had the need to link directly to an open modal window with Bootstrap, here's a quick and easy way to do it:

Make sure your modal has an id:

<div class="modal" id="myModal" ... >

Then stick this bit of Javascript at at the end of your document:
 */

 $(document).ready(function() {
   var url = window.location.href;
   /* When accessing a specific work via a modal, the url is updated*/
   //$(window.location.hash).modal('show');
   $('a[data-toggle="modal"]').click(function(){
      window.location.hash = $(this).attr('href').substring(15,$(this).attr('href').length);;//$(this).attr('href');
   });

   function revertToOriginalURL() {
        var original = window.location.href.substr(0, window.location.href.indexOf('#'))
        history.replaceState({}, document.title, original);
        history.pushState(null, null, original);
    }

    /* If using a specific url related to a work, we access the article directly*/
    for (var i = 0; i < 40; i++) {
        //console.log(i);
        if (url.indexOf('#'+i) != -1) {
            //alert('#portfolioModal'+i);
            $('#portfolioModal'+i).modal('show');
        }
    }


    $('.modal').on('hidden.bs.modal', function () {
        revertToOriginalURL();
    });

    /* To manage the back button, and the closing of modal */
    $(".modal").on("shown.bs.modal", function()  { // any time a modal is shown
        //var urlReplace = $(this).attr('id').substring(15,$(this).attr('id').length);//"#" + $(this).attr('id'); // make the hash the id of the modal shown
        //history.pushState(null, null, urlReplace); // push state that hash into the url
    });

    // If a pushstate has previously happened and the back button is clicked, hide any modals.
    $(window).on('popstate', function() {
        $(".modal").modal('hide');
    });


 });



/*
Then you can send people to http://www.website.com/page.html#myModal and it'll load the page with the modal open.
*/
