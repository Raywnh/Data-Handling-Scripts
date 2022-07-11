/*
 * Function: moveData - moves the selected row of data to another sheet
 * Parameter: row - the row being moved
 */
function moveData(row) {
  var spreadSheet = SpreadsheetApp.openById('1e2fwQYrC86XkmxpedP50jVbXjwx6RFEeO8tygoZ9_b4');
  var studentSheet = spreadSheet.getSheetByName('List of Users (Students)');
  var staffSheet = spreadSheet.getSheetByName('List of Users (Staff)');

  var time = getTime();

  // Take the range of data in the archive sheet
  var archiveRange = spreadSheet.getRangeByName('ArchivedRange');
  var archivedEntries = archiveRange.getValues();
  
  // This loop searches the archive sheet and gives us an empty row to move data to
  for (let i = 0; i < archivedEntries.length; i++)  {
    if (archivedEntries[i] == '') {
       var newRow = i+1;
       break;
    }
  }
  
  // Formats range in the correct format 
  var firstRange = Utilities.formatString("%d:%d",row,row);
  var secondRange = Utilities.formatString("%d:%d",newRow,newRow);

  // Moves the row of data to another sheet
  if (time >= '08:00:00' && time <= '09:00:00') {
    spreadSheet.getRange('List of Users (Students)!' + firstRange).copyTo(spreadSheet.getRange('List of Users (Left CityU)!' + secondRange));
    studentSheet.deleteRow(row);
  }  
  else if ((time >= '09:00:00' && time <= '10:00:00'))  {
    spreadSheet.getRange('List of Users (Staff)!' + firstRange).copyTo(spreadSheet.getRange('List of Users (Left CityU)!' + secondRange));
    staffSheet.deleteRow(row);
  }
  
}
// NOTES:

// We move the row to another sheet directly without having to delete rows since the data is sorted by contract end date in descending order already, meaning that the row(s) of data that will be moved are placed at the bottom of the data set
// This method avoids messing with the range of cells in the data set which occured in the previous method of incorporating deleting rows