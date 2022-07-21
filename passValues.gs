/*
 * Function: passValues - passes in the correct parameters for checking the contract end date of each user so that values will not be reset when the other functions run
 * Parameter(s): none
 */

function passValues() {
  var time = getTime();

  var spreadSheet = SpreadsheetApp.openById('spreadsheetid');  // Opens the spreadsheet

 // Takes the column containing only the dates of when each contract ends and stores them in an array
  if (time >= '08:00:00' && time <= '09:00:00') {
   
    var range = spreadSheet.getRangeByName('StudentData');
    var values = range.getValues();
    var maxRows = values.length;
  }
  else if (time >= '09:00:00' && time <= '10:00:00')  {
    var range = spreadSheet.getRangeByName('StaffData');
    var values = range.getValues();
    var maxRows = values.length;
  }
  

  // Checks the column for the status of a contract
  checkContractEnd(maxRows - 1, ...values);

  // Checks whether a user has filled out the question that asks them whether they want to terminate their contract early
  checkEarlyTermination(maxRows - 1,...values);
  
}

// NOTES:

// Set range to read from in google sheets 
// Take the values of the contract end dates and passes it to checkEmptyCells
// Passes in the starting index which begins from the end so its value does not reset when we loop inside the checkContractEnd function