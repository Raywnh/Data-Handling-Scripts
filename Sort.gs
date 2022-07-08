function sortDate() {
   var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
   var range = spreadSheet.getRangeByName('sort_this');

   range.sort({column: 9, ascending: false});
}

// We sort the data in descending order depending on the date of the contract ending to easily search for the earliest date
// If earliest date is not equal to the current date, no other date will be as well
