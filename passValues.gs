/*
 * Function: passValues - passes in the correct parameters for checking the contract end date of each user so that values will not be reset when the other functions run
 * Parameter(s): none
 */

function passValues() {
  var time = getTime();

  var spreadSheet = SpreadsheetApp.openById('spreadsheetID');  

  if (time >= '00:00:00' && time <= '01:00:00') { // If the time is between 12 AM and 1 AM, we will only evaluate Data1
   
    var range = spreadSheet.getRangeByName('Data1');  
    var values = range.getValues(); 
    var maxRows = values.length;
  }
  else if (time >= '01:00:00' && time <= '02:00:00')  { // If the time is between 1 AM and 2 AM, we will only evaluate Data2
    var range = spreadSheet.getRangeByName('Data2');
    var values = range.getValues();
    var maxRows = values.length;
  }

  // This function checks the column containing the contract end dates and their status
  checkContractEnd(maxRows - 1, ...values);

  // This function checks the column containing the status of early contract termination
  checkEarlyTermination(maxRows - 1,...values);
  
}
