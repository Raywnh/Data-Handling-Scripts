function myFunction() {
  var currentDate = Utilities.formatDate(new Date(), "GMT+8", "MMMM dd, yyyy");
  console.log(currentDate);

  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var range = spreadSheet.getRangeByName('Contract_End_Dates');
  var values = range.getValues();

  var reFactoredValue = Utilities.formatDate(values[1][0], "GMT+8", "MMMM dd, yyyy");
  console.log(reFactoredValue);
  // Takes the column containing only the dates of when each contract ends
  //var range = spreadSheet.getRangeByName('Contract_End_Dates');
  //spreadSheet.getRange('Sheet1!2:2').moveTo(spreadSheet.getRange('Sheet2!2:2'));
}
