function moveData(row) {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var firstSheet = spreadSheet.getSheetByName('Sheet1');
  var secondSheet = spreadSheet.getSheetByName('Sheet2');

  var archiveRange = spreadSheet.getRangeByName('OccupiedSpace');
  var archivedEntries = archiveRange.getValues();
  
  for (let i = 0; i < archivedEntries.length; i++)  {
    if (archivedEntries[i][0].length == 0) {
       var newRow = i;
       break;
    }
  }
  //var firstRange = String(row) + ':' + String(row);
  //var secondRange = String(newRow) +  ':' + String(newRow);
 
  var firstRange = Utilities.formatString("%d:%d",row,row);
  var secondRange = Utilities.formatString("%d:%d",newRow,newRow);



  console.log(firstRange);
  console.log(secondRange);
  
  // spreadSheet.getRange('Sheet1!' + firstRange).moveTo(spreadSheet.getRange('Sheet2!' + secondRange));

  

  // firstSheet.deleteRow(row+1);
}

// We move the row to another sheet and delete the row in the old sheet
// New Method, copy cell by cell to another row instead of moving directly