function tests() {
  var spreadSheet = SpreadsheetApp.openById('1e2fwQYrC86XkmxpedP50jVbXjwx6RFEeO8tygoZ9_b4');
   var range = spreadSheet.getRangeByName('StudentData');
   var values = range.getValues();
   var labSection = values[1][values[1].length - 1];
   console.log(labSection);
}
