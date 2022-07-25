/*
 * Function: checkDuplicatesUser1() - checks the sheet for whether there is a duplicate data entry based on user's student/staff ID and deletes the older data entry
 * Parameter(s): none
 */

function checkDuplicatesStaff() {
  var spreadSheet = SpreadsheetApp.openById('spreadsheetID');  

  var user1Sheet = spreadSheet.getSheetByName('users1!');  
  var sheetName = 'users1!';  
  
  var range = spreadSheet.getRangeByName('sortUser1');  
  
  var values = range.getValues();     
  var maxLength = getLength(...values);     // We get the length of the amount of rows filled in so that we don't search empty rows
  var colLength = values[0].length;     
  

  // This loop searches for matching ID numbers and moves the old data entries with another function
  // We temporarily save one ID and try to match it with every other ID number, if there are no matches, then we find a different ID number

  for (let i = 0; i < maxLength; i++)  {
    var currentData = values[i][colLength - 3];   // colLength - 3 is the index containing the ID numbers
    var currentTime = values[i][0];   // This contains the timestamp of when the user has submitted the form


    for (let j = i + 1; j < maxLength; j++) {
      var duplicateData = values[j][colLength - 3];   // Save an ID number that is not currentData 

      if (duplicateData == currentData) {   // If we get matching ID numbers, then we compare the timestamps of both data entries and archive the older data entry
        var duplicateTime = values[j][0]; 
        
        if (duplicateTime < currentTime)  
          moveToOld(j+2,user1sheet, sheetName);
        else  
          moveToOld(i+2,user1sheet, sheetName);
      } 
    }
  }
}
