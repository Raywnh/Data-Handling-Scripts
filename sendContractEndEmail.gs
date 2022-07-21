/*
 * Function: sendContractEndEmail - sends an email that inlcudes instructions for users when their contract has ended
 * Parameter: email - email of the user
 * Parameter: name - name of the user
 * Parameter: daysUntilContractEnd - days until contract ends
 */
function sendContractEndEmail(email, name, daysUntilContractEnd) {
  var time = getTime()
  if (time >= '08:00:00'  && time <= '09:00:00')
    var link = 'link 1'; // For students
  else if (time >= '09:00:00' && time <= '10:00:00')
    var link = 'link 2'; // For staff

  var modules = '- Contract End Date\n- Period of Contract';

  if (daysUntilContractEnd == 7)
    MailApp.sendEmail(email, 'Contract Extension/Termination', 'Dear ' + name +',\n\n' +'This is a reminder that your contract will end in ' + daysUntilContractEnd +' days, if you are planning to extend your contract, please email placeholder@gmail.com for further details.\n\nIf you have already extended your contract, we request that you update the following in the google form attached below:\n\n'+modules +'\n\n' +'Here is the link to the google form: ' +link +'\n\nIgnore this message if none of the above applies.');
  else if (daysUntilContractEnd == 0)
    MailApp.sendEmail(email, 'Contract Extension/Termination', 'Dear ' + name +',\n\n' +'This is a reminder that your contract will end in ' + daysUntilContractEnd +' days, if you are planning to extend your contract, please email placeholder@gmail.com for further details.\n\nIf you have already extended your contract, we request that you update the following in the google form attached below:\n\n'+modules +'\n\n' +'If you are not planning to renew your contract, please fill out the following in the google form attached below:\n\n-Eyesight Test Date/Declaration of No Eyesight Test'+ '\n\nHere is the link to the google form: ' +link + '\n\nIgnore this message if none of the above applies.');

}
