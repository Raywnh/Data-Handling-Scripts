function moveData(row) {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet;
  var firstSheet = spreadSheet.getSheetByName('Sheet1');
  var secondSheet = spreadSheet.getSheetByName('Sheet2');

  var archiveRange = spreadSheet.getRangeByName('OccupiedSpace');
  var archivedEntries = archiveRange.getValues();
  
  for (let i = 0; i < archivedEntries.length; i++)  {
    if (archivedEntries[i] == '') {
       var newRow = i+1;
       break;
    }
  }
  var firstRange = Utilities.formatString("%d:%d",row,row);
  var secondRange = Utilities.formatString("%d:%d",newRow,newRow);
  
  //spreadSheet.getRange('Sheet1!' + firstRange).copyTo(spreadSheet.getRange('Sheet2!' + secondRange));
  
  //firstSheet.deleteRow(row);
  row++;
  passValues(row);
}

// We move the row to another sheet and delete the row in the old sheet
// New Method, copy cell by cell to another row instead of moving directly