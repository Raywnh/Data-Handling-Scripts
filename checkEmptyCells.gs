/*
 * Function: checkEmptyCells - checks each cell of the spreadsheet for whether it is empty and stores the titles of the empty elements into another array
 * Parameter(s): none 
*/

function checkEmptyCells() {
  // Opens the spreadsheet and stores the range of values in variable range (range is around 75 rows and 18 columns - subject to change) 
  var spreadSheet = SpreadsheetApp.openById('spreadsheetid');

  var time = getTime();

  if (time >= '07:00:00' && time <= '08:00:00')
    var range = spreadSheet.getRangeByName('StudentData');
  else  (time >= '08:00:00' && time <= '09:00:00')
    var range = spreadSheet.getRangeByName('StaffData');

  // Gets the values in the range of data and stores them in a two dimensional array
  var values = range.getValues();
  var rowSize = values.length;


  // All assigned lab sections 
  var labOne = 'P1610, P1607, P1410';
  var labTwo = 'P1628';
  var labThree = 'P1816, P1602';

  // Loops through the two dimensional array and checks each cell for whether its empty 
  for (let i = 1; i < rowSize; i++) {
    var colSize = values[i].length;
    
    var labSection = values[i][values[i].length - 2];

    // Creates an array that will be used to contain the specific elements that the users have yet to complete
    var incompletedElements = [];
    let k = 0;

    for (let j = 1; j < colSize; j++) {
        if (j == 13)
          j++;
          
        // One possible combination - includes labOne but not labThree
        if (labSection.includes(labOne) && !labSection.includes(labThree) && j == 9)  
            j++;
        
        // Second possible combination - only includes labTwo
        else if (labSection == labTwo && j == 7)  
            j = 11;

        // Third possible cominbation - includes labThree (no conditionals since it requires all modules)

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
      sendReminderEmail(values[i][0],incompletedElements);
     
  } 
} 

// NOTES:

// Algorithm may slow down if the size of the range increases to 100 rows and 18 columns. This should not be a problem unless the function takes more than 30 seconds to run

// Line 9: if applicable, the range of the data used can be renamed accordingly by editing the 'Data' to a different name in the spreadsheet. Note the requirement of the name to be enclosed in single-quotes or double quotes
// Line 16: the row index start at 1 rather than at 0 because the first row contains the titles of the elements which do not have to be checked
// Line 24: the column index starts at 1 rather than at 0 because the first column contains the 'Timestamp' element which do not have to be checked
// Lines 27 and 36: if an array/element has length 0, it means that the variable is empty and blank

// The two conditional statements inside the loop is for filtering out the safety training modules that users are required to finish
  // The rooms contained in labThree have to do every module in the form but labTwo users can skip 4 modules
  // Whereas labOne users can skip one module
  // So if someone is included in labThree, it does not matter if they also have access to labTwo/labOne or not, because labThree covers all possible modules 
    
