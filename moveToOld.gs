/*
 * Function: moveToOld - moves old user data to a different sheet
 * Parameter: row - row that we are moving
 * Parameter: sheet - the corresponding sheet containing the row of user data that we are accessing
 * Parameter: sheetName - the corresponding sheet name stored as a string variable
 */

function moveToOld(row, sheet,sheetName) {
  var spreadSheet = SpreadsheetApp.openById('spreadsheetID');

  // Take the range of data in the archive sheet
  var oldDataRange = spreadSheet.getRangeByName('OldData');
  var oldDataEntries = oldDataRange.getValues();
  
  // This loop searches the archive sheet and gives us an empty row to move data to
  for (let i = 0; i < oldDataEntries.length; i++)  {
    if (oldDataEntries[i] == '') {
       var newRow = i+1;
       break;
    }
  }
  var firstRange = Utilities.formatString("%d:%d",row,row);
  var secondRange = Utilities.formatString("%d:%d",newRow,newRow);


  spreadSheet.getRange(sheetName + firstRange).copyTo(spreadSheet.getRange('sortOldData!' + secondRange));
  sheet.deleteRow(row);

}
