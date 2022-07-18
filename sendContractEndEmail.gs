/*
 * Function: sendContractEndEmail - sends an email that inlcudes instructions for users when their contract has ended
 * Parameter: email - email of the user
 * Parameter: name - name of the user
 * Parameter: daysUntilContractEnd - days until contract ends
 */
function sendContractEndEmail(email, name, daysUntilContractEnd) {
  var time = getTime()
  if (time >= '08:00:00'  && time <= '09:00:00')
    var link = 'https://docs.google.com/forms/d/e/1FAIpQLSfPneEAv6dE1_OCYvdAfzQb-qNcwrTTsjtHj8dxkpEDZXbfVA/viewform?usp=sf_link';
  else if (time >= '09:00:00' && time <= '10:00:00')
    var link = 'https://docs.google.com/forms/d/e/1FAIpQLSdMW7KoNgiRdKiLH5gN9ZcQB2ocA5UDEWiyMe94bfZjYF72fA/viewform?usp=sf_link';

  MailApp.sendEmail(email, 'Contract Extension/Termination', 'Dear ' + name +',\n\n' +'This is a reminder that your contract will end in ' + daysUntilContractEnd +' days, if you are planning to extend your contract, please email placeholder@gmail.com for further details.\n\nIf you have already extended your contract, we request that you update your Contract End Date and your Period of Contract in the google form below: \n\n' +link);
 

}
