/*
 * Function: checkEarlyTermination - check for whether a user's contract has ended
 * Parameter: length - length of the stored value array in the last column
 * Parameter: ...values - the array containing the values stored in the last column of the spreadsheet
 */
function checkEarlyTermination(index,...values) {
  for (let i = index; i > 0; i--)  {
    if (values[i][values[0].length - 1] == 'Yes') // If the early termination box is filled, then we delete the row of data
      moveData(i+1);
  }  
}
