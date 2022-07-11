/*
 * Function: passValues - passes in the correct parameters for checking the contract end date of each user so that values will not be reset when the other functions run
 * Parameter(s): none
 */

function passValues() {
  var time = getTime();

  var spreadSheet = SpreadsheetApp.openById('1e2fwQYrC86XkmxpedP50jVbXjwx6RFEeO8tygoZ9_b4');

  if (time >= '11:00:00' && time <= '12:00:00') {
    // Takes the column containing only the dates of when each contract ends
    var range = spreadSheet.getRangeByName('StudentContractEndDates');
    var values = range.getValues();
    var maxRows = values.length;
  }
  else {
    var range = spreadSheet.getRangeByName('StaffContractEndDates');
    var values = range.getValues();
    var maxRows = values.length;
  }
  
  checkContractEnd(maxRows - 1, ...values);
 
}

// NOTES:

// Set range to read from in google sheets 
// Take the values of the contract end dates and passes it to checkEmptyCells
// Passes in the starting index which begins from the end so its value does not reset when we loop inside the checkContractEnd function