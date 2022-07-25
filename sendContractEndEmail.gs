/*
 * Function: sendContractEndEmail - sends an email that inlcudes instructions for users when their contract has ended
 * Parameter: email - email of the user
 * Parameter: name - name of the user
 * Parameter: daysUntilContractEnd - days until contract ends
 */
function sendContractEndEmail(email, name, daysUntilContractEnd) {
  var time = getTime()
  if (time >= '00:00:00'  && time <= '01:00:00')
    var link = 'link1'; // For users1
  else if (time >= '01:00:00' && time <= '02:00:00')
    var link = 'link2'; // For users2

  var modules = '- Contract End Date\n- Period of Contract';
  var testModules = '- Others';

  if (daysUntilContractEnd == 7)
    MailApp.sendEmail(email, 'Contract Extension/Termination', 'Dear ' + name +',\n\n' +'This is a reminder that your contract will end in ' + daysUntilContractEnd +' days, if you are planning to extend your contract, please email example@gmail.com for further details.\n\nIf you have already extended your contract, we request that you update the following in the google form attached below:\n\n'+modules +'\n\n' +'Here is the link to the google form: ' +link +'\n\nIgnore this message if none of the above applies.');
  else if (daysUntilContractEnd == 0)
    MailApp.sendEmail(email, 'Contract Extension/Termination', 'Dear ' + name +',\n\n' +'This is a reminder that your contract will end in ' + daysUntilContractEnd +' days, if you are planning to extend your contract, please email example@gmail.com for further details.\n\nIf you have already extended your contract, we request that you update the following in the google form attached below:\n\n'+modules +'\n\n' +'If you are not planning to renew your contract, please fill out the following in the google form attached below (if applicable):\n\n' +testModules + '\n\nHere is the link to the google form: ' +link + '\n\nIgnore this message if none of the above applies.');

}

