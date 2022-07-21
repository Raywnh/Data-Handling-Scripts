/*
 * Function: sortDate - sorts the data set according to the column containing the contract end date in descending order (earliest date at the bottom)
 * Parameter(s): none
 */

function sortDate() {
  var spreadSheet = SpreadsheetApp.openById('spreadsheetid');  // Opens spreadsheet
  var studentRange = spreadSheet.getRangeByName('SortStudentData'); // Opens the range named 'SortStudentData' in the spreadsheet
  var staffRange = spreadSheet.getRangeByName('SortStaffData');     // Opens the range named 'SortStaffData' in the spreadsheet

  // Sorts the data based on column 16 which contains all user's contract end dates in descending order
  studentRange.sort({column: 16, ascending: false});  // Column is the column number in the spreadsheet: A = 1, B = 2, C = 3...
  staffRange.sort({column: 16, ascending: false});
}

// NOTES:

// We sort the data in descending order depending on the date of the contract ending to easily search for the earliest date which is placed at the bottom
// If earliest date is not equal to the current date, no other date will be as well, which decreases the time it takes to search within the data set

