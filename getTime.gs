/*
 * Function: getTime - returns today's date
 * Paramater(s): none
 */
function getTime() {
  var date = new Date();

  // Time to British format (00:00:00 -> 24:00:00)
  var time = date.toLocaleTimeString('en-gb');

  return time;
}
