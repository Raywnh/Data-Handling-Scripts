/*
 * Function: getLength() - returns the length of the array of values that are not blank
 * Parameter: ...values - the array containing user data
 * 
 */

function getLength(...values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i][0] == '')   // When we reach a blank row, we return the number of rows that have been searched through, which returns the length of the array
      return i;
  }
}
