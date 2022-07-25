/*
 * Function: sortDate - sorts the data set according to the column containing the contract end date in descending order (earliest date at the bottom)
 * Parameter(s): none
 */

function sortDate() {
  var spreadSheet = SpreadsheetApp.openById('spreadsheetID');  
  var range1 = spreadSheet.getRangeByName('sortUser1'); 
  var range2 = spreadSheet.getRangeByName('sortUser2');     
  var oldDataRange = spreadSheet.getRangeByName('sortOldData');

  // Sorts the data based on column 26 which contains all user's contract end dates in descending order
  range1.sort({column: 26, ascending: false});  // Column is the column number in the spreadsheet: A = 1, B = 2, C = 3...
  range2.sort({column: 26, ascending: false});
  oldDataRange.sort({column: 1, ascending: true});  // Sort old data range based on timestamp from earliest to oldest
}
