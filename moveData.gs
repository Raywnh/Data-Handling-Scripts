/*
 * Function: moveData - moves the selected row of data to another sheet
 * Parameter: row - the row being moved
 */
function moveData(row) {
  var spreadSheet = SpreadsheetApp.openById('spreadsheetID');
  var studentSheet = spreadSheet.getSheetByName('Users1');
  var staffSheet = spreadSheet.getSheetByName('Users2');

  var time = getTime();

  // Take the range of data in the archive sheet
  var archiveRange = spreadSheet.getRangeByName('Archive');
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
  if (time >= '00:00:00' && time <= '01:00:00') {
    spreadSheet.getRange('Users1!' + firstRange).copyTo(spreadSheet.getRange('Users3!' + secondRange));
    studentSheet.deleteRow(row);
  }  
  else if ((time >= '01:00:00' && time <= '02:00:00'))  {
    spreadSheet.getRange('Users2!' + firstRange).copyTo(spreadSheet.getRange('Useres3!' + secondRange));
    staffSheet.deleteRow(row);
  }
  
}
