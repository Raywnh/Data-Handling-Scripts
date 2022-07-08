function passValues(row) {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
   
  // Takes the column containing only the dates of when each contract ends
  var range = spreadSheet.getRangeByName('Contract_End_Dates');
  var values = range.getValues();
  if (row == undefined)
    var i = 0;
  else
    i = row;
  
  checkContractEnd(i, ...values);
}
// Set range to read from in google sheets
// Take the values of the contract end dates 