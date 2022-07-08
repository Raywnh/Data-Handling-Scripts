function sortDate() {
   var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
   var range = ss.getRangeByName('sort_this');
   
   range.sort({column: 9, ascending: false});
}
