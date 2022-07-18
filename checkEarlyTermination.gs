/*
 * Function: checkEarlyTermination - check for whether a user's contract has ended
 * Parameter: length - length of the stored value array in the last column
 * Parameter: ...values - the array containing the values stored in the last column of the spreadsheet
 */
function checkEarlyTermination(length,...values) {
  for (let i = 0; i < length; i++)  {
    if (values[i][values[i].length - 1] == 'Yes')
      moveData(i+1);
  }  
}
