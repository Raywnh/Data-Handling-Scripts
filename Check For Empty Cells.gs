function checkEmptyCells() {
  // Opens 
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var range = spreadSheet.getRangeByName('Data');

  var values = range.getValues();
  var rowSize = values.length;
  
  for (let i = 1; i < rowSize; i++) {
    var colSize = values[i].length;
    var incompletedElements = [];
    let k = 0;

    for (let j = 0; j < colSize; j++) {
        if (values[i][j].length == 0) {
          incompletedElements[k] = values[0][j];
          k++;
        }
    }
    if(incompletedElements.length != 0 && values[i][0].length != 0)
      sendEmail(values[i][0],incompletedElements);
  } 
} 

// PLAN:

// Create an array - values - that contains all the values of the range specified in the spreadsheet
// Loop through the array, starting from row 2, checking each column for whether its empty
// We start from row 2 because row 1 contains the titles of the data inputs
// After looping through one row of data, if there is an empty cell, we save the title of that specific data cell and input it to another array

// Call to separate function that sends the email with the correct respondent name, subject, and the data that is missing with a reminder for them to update the information
