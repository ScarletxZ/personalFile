/* Created by ScarletxZ, dump file */

/* some example on how wrapper function works */
function foo(x) { 
if(x) {
 console.log(x);
}else{
 x = "Data didn't entered";
 console.log(x);
 }
 if(window.hasOwnProperty(x)) {
  console.log('Available data!');
  console.log(x);
 }else{
  console.log('Unavailable data.');
  x = 'foo';
  console.log(x);
 }
}

function herebe(dragons) {
 n = dragons;
 res = window.hasOwnProperty(n),
 window.hasOwnProperty(dragons);
 if(res) {
  console.log(res);
 }else{
  console.log('Here be dragons..');
 }
}

function pseudodatabase(title,description) {
 titlo = title;
 descripto = description;
 json = {
  'title':titlo,
  'description':descripto
  };
 if(titlo) {
  titloval = $('#' + titlo).val();
}else{
  console.log('lol');
}
 if(descripto) {
  descripval = $('#' + descripto).val();
 }else{
   console.log('lol');
 }
 $('#database').html(json);
}
