/*
 * Function: sendEmail - sends email reminder to users who have no yet full completed the safety training modules
 * Parameter: email - email of the user
 * Parameter: ...array - array containing the modules that users have yet to finish
*/
function sendReminderEmail(email,...array)  {

  var reformattedString = ''; // Empty sentence that will be filled out later 
  var time = getTime();       // Saves today's date
  
  if (time >= '08:00:00'  && time <= '09:00:00')  // Between 8 AM to 9 AM, the link will be for STUDENTS ONLY
    var link = 'link 1'; // For students
  else if (time >= '09:00:00' && time <= '10:00:00')  // Between 9 AM to 10 AM, the link will be for STAFF ONLY 
    var link = 'link 2'; // For staff

  // This loop reformats the missing items into an organized list for the email
  for (let i = 0; i < array[0].length; i++)  
    reformattedString += '- ' + array[0][i] + '\n';

  // This sends an email to the user with a message containing every item that they are missing in the spreadsheet
  MailApp.sendEmail(email,'This is a reminder to complete the following safety training modules', 'Please remember to finish the following tasks and update it in ' + link +':' + '\n' + '\n' + reformattedString); // The symbol - \n is the same as pressing enter on a word document.
}

// NOTES: 

//...array is just syntax for passing in array as a parameter in the ES6 update to javascript, it must be the very last parameter in the function as well

// Line 6: Admins may edit the subject of the email and the body of the email by editing the sentences/string enclosed by single quotes
  // E.g. MailApp.sendEmail(email, 'Enter subject here', 'Enter body here' + array)
