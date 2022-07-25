/*
 * Function: sendEmail - sends email reminder to users who have no yet full completed the safety training modules
 * Parameter: email - email of the user
 * Parameter: ...array - array containing the modules that users have yet to finish
*/
function sendReminderEmail(email,...array)  {

  var reformattedString = ''; // Empty sentence that will be filled out later 
  var time = getTime();       // Saves today's date
  
  if (time >= '05:00:00'  && time <= '06:00:00')  // Between 5 AM to 6 AM, the link will be for users1 
    var link = 'link1'; 
  else if (time >= '06:00:00' && time <= '07:00:00')  // Between 6 AM to 7 AM, the link will be for users2
    var link = 'link2'; 

  // This loop reformats the missing items into an organized list for the email
  for (let i = 0; i < array[0].length; i++)  
    reformattedString += '- ' + array[0][i] + '\n';

  // This sends an email to the user with a message containing every item that they are missing in the spreadsheet
  MailApp.sendEmail(email,'This is a reminder to complete the following safety training modules', 'Please remember to finish the following tasks and update it in ' + link +':' + '\n' + '\n' + reformattedString);
}
