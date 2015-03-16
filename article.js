/* Created by ScarletxZ, all rights reserved */
$(function() {
 var articlename = $('#title').val();
 var createdate = $('#date').val();
 var author = $('#author').val();
 var cont = $('#article').val();


/* then, store the data in json file */
var json = {
 "title":articlename,
 "creation":createdate,
 "authorname":author,
 "article":cont
};

/* render it, finally! */
var data = JSON.stringify(json);
$('#database').html(data);
