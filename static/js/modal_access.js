/* If you've ever had the need to link directly to an open modal window with Bootstrap, here's a quick and easy way to do it:

Make sure your modal has an id:

<div class="modal" id="myModal" ... >

Then stick this bit of Javascript at at the end of your document:
 */

 $(document).ready(function() {
   var url = window.location.href;
   for (var i = 0; i < 9; i++) {
       console.log(i);
       if (url.indexOf('?w='+i) != -1) {
         $("#portfolioModal"+i).modal('show');
       }
   }

 });



/*
Then you can send people to http://www.website.com/page.html#myModal and it'll load the page with the modal open.
*/
