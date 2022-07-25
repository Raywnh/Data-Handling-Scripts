/*
 * Function: checkEarlyTermination - check for whether a user's contract has ended
 * Parameter: length - length of the stored value array in the last column
 * Parameter: ...values - the array containing the values stored in the last column of the spreadsheet
 */
function checkEarlyTermination(index,...values) {

  // This loop searches for whether a user has filled out the early termination box
  for (let i = index; i > 0; i--)  {
    if (values[i][values[0].length - 4] == 'Yes') { // If the early termination box is filled, then we send a notification to the admin and archive the user data
      sendNotification(i,...values);
      moveData(i+1);
    }
  }  
}
