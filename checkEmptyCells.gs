/*
 * Function: checkEmptyCells - checks each cell of the spreadsheet for whether it is empty and stores the titles of the empty elements into another array\
 * Parameter(s): none 
*/

function checkEmptyCells() {
  // Opens the spreadsheet and stores the range of values in variable range (range is around 75 rows and 18 columns - subject to change)
  var spreadSheet = openById('1e2fwQYrC86XkmxpedP50jVbXjwx6RFEeO8tygoZ9_b4');

  var time = getTime();

  if (time >= '11:00:00' && time <= '12:00:00')
    var range = spreadSheet.getRangeByName('StudentData');
  else
    var range = spreadSheet.getRangeByName('StaffData');

  // Gets the values in the range of data and stores them in a two dimensional array
  var values = range.getValues();
  var rowSize = values.length;
  
  // Loops through the two dimensional array and checks each cell for whether its empty 
  for (let i = 1; i < rowSize; i++) {
    var colSize = values[i].length;

    // Creates an array that will be used to contain the specific elements that the users have yet to complete
    var incompletedElements = [];
    let k = 0;

    // Start looping through a row from column B because column A contains timestamps that we do not use  
    for (let j = 1; j < colSize; j++) {

        // If the cell is empty, add the title of the element into the array 
        if (values[i][j].length == 0) {

          // The elements in row index 0 of the two dimensional array values contain the titles of the elements
          incompletedElements[k] = values[0][j];
          k++;
        }
    }

    // If a user has not yet completed all of their tasks and have recorded their email address in the spreadsheet, an email will be sent to them 
    if(incompletedElements.length != 0 && values[i][0].length != 0)

      // Function call to sendEmail which sends an automated email to the user containing the tasks that they must complete
      sendEmail(values[i][0],incompletedElements);
  } 
} 

// NOTES:

// Algorithm may slow down if the size of the range increases to 100 rows and 18 columns. This should not be a problem unless the function takes more than 30 seconds to run

// Line 9: if applicable, the range of the data used can be renamed accordingly by editing the 'Data' to a different name in the spreadsheet. Note the requirement of the name to be enclosed in single-quotes or double quotes
// Line 16: the row index start at 1 rather than at 0 because the first row contains the titles of the elements which do not have to be checked
// Line 24: the column index starts at 1 rather than at 0 because the first column contains the 'Timestamp' element which do not have to be checked
// Lines 27 and 36: if an array/element has length 0, it means that the variable is empty and blank
