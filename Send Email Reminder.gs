/*
 * Function: sendEmail - sends email reminder to users who have no yet full completed the safety training modules
 * Parameter: ...array - array containing the modules that users have yet to finish
*/
function sendEmail(email,...array)  {
  var body = '';
  for (let i = 0; i < array.length; i++)  
    body += array[i] + ' ';
  
  MailApp.sendEmail(email,'Reminders to complete the following safety training modules',array);

}

// NOTE: ...array is just syntax for passing in array as a parameter in the ES6 update to javascript

