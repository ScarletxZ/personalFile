function $_check(func) {
 Object.prototype.hasOwnProperty.call(window, property);
 /* or else */
 function windowHasOwnProperty(x) {
  return (x in window) && true || false;
 }
 if(window.hasOwnProperty(func)) {
  console.log('The desired function was available. The script will log the data in your console.');
  console.log(func);
 }else{
  console.log('Whoops! Sorry, your desired function wasn't available. But if you're hoping to see this message, congrats, you
  found it.');
 }
}
