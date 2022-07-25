/*
 * Function: sendNotification - sends an email notifying admins of a user's early contract termination
 * Parameter: index - pointer for traversing array
 * Parameter: ...values - array containing the user data
 */

function sendNotification(index,...values) {
  var email = values[index][0];
  var name = values[index][1];

  MailApp.sendEmail('example@gmail.com', 'Early Contract Termination Notification', 'The user ' + name + ' with the email ' + email + ' has terminated their contract early');
}
