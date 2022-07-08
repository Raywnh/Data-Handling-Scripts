function moveData(row) {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Take the range of data in the archive sheet
  var archiveRange = spreadSheet.getRangeByName('ArchivedRange');
  var archivedEntries = archiveRange.getValues();
  
  // This loop gives us an empty row to move data to
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
  spreadSheet.getRange('Sheet1!' + firstRange).moveTo(spreadSheet.getRange('Sheet2!' + secondRange));
  
  
}

// We move the row to another sheet and delete the row in the old sheet
// New Method, copy cell by cell to another row instead of moving directly