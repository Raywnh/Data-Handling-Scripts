function myFunction() {
  var currentDate = Utilities.formatDate(new Date(), "GMT+8", "MMMM dd, yyyy");
  console.log(currentDate);

  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
   
  // Takes the column containing only the dates of when each contract ends
  var range = spreadSheet.getRangeByName('Contract_End_Dates');
  var values = range.getValues();
  var valuess = Utilities.formatDate(values[7][0],"GMT+8","MMMM dd, yyyy")
  console.log(valuess);
  if (valuess == currentDate)
    console.log('success');
}
