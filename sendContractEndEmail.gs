function sendContractEndEmail(email, daysUntilContractEnd) {
  var time = getTime()
  if (time >= '08:00:00'  && time <= '09:00:00')
    console.log('student');
  else if (time >= '09:00:00' && time <= '10:00:00')
    console.log('staff');

  MailApp.sendEmail(email, 'Contract Extension/Termination', 'This is a reminder that your contract will end in ' + daysUntilContractEnd +' days, if you are planning to extend your contract, please email placeholder@gmail.com for further details. \n If you have already extended your contract, we request that you update your Contract End Date and your Period of Contract in the google form below: \n link');
 

}
