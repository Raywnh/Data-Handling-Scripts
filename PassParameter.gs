function passValues() {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
   
  // Takes the column containing only the dates of when each contract ends
  var range = spreadSheet.getRangeByName('Contract_End_Dates');
  var values = range.getValues();
  var maxRows = values.length;

  checkContractEnd(maxRows - 1, ...values);
 
}
// Set range to read from in google sheets
// Take the values of the contract end dates 