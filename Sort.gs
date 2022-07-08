function sortDate() {
   var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
   var range = spreadSheet.getRangeByName('sort_this');

   range.sort({column: 9, ascending: false});
}
