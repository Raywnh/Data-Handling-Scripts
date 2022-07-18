/*
 * Function: getTime - returns today's date
 * Paramater(s): none
 */
function getTime() {
  var date = new Date();
  var time = date.toLocaleTimeString('en-gb');

  return time;
}
