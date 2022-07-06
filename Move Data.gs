function moveData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var firstSheet = sheet.getSheetByName('Sheet1');
  var firstRange = firstSheet.getRange('A$3:H$3');
  firstRange.moveTo(sheet.getSheetByName('Sheet2').getRange('A$3:H$3'));
  firstSheet.deleteRow(3);
}
