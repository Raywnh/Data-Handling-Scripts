/*
 * Function: sendEmail - sends email reminder to users who have no yet full completed the safety training modules
 * Parameter: email - email of the user
 * Parameter: ...array - array containing the modules that users have yet to finish
*/
function sendEmail(email,...array)  {

  var reformattedString = '';

  for (let i = 0; i < array[0].length; i++)  
    reformattedString += '-' + array[0][i] + '\n';

  
  MailApp.sendEmail(email,'Reminders to complete the following safety training modules', 'Please remember to finish the following tasks:' + '\n' + '\n' + reformattedString);
}

// NOTES: 

//...array is just syntax for passing in array as a parameter in the ES6 update to javascript, it must be the very last parameter in the function as well

// Line 6: Admins may edit the subject of the email and the body of the email by editing the sentences/string enclosed by single quotes
  // E.g. MailApp.sendEmail(email, 'Enter subject here', 'Enter body here' + array)
