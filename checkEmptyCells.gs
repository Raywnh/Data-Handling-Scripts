/*
 * Function: checkEmptyCells - checks each cell of the spreadsheet for whether it is empty and stores the titles of the empty elements into another array
 * Parameter(s): none 
*/
function checkEmptyCells() {

  // Opens the spreadsheet 
  var spreadSheet = SpreadsheetApp.openById('spreadsheetID');

  var time = getTime();
                               
  if (time >= '05:00:00' && time <= '06:00:00')   // If time is between 5 AM and 6 AM, then we deal with student data only
    var range = spreadSheet.getRangeByName('Data1');
  else if (time >= '06:00:00' && time <= '07:00:00')  // If time is between 6 AM and 7 AM, then we deal with staff data onlu
    var range = spreadSheet.getRangeByName('Data2');

 
  var values = range.getValues();   // Gets the values in the range of data and stores them in a two dimensional array
  var rowSize = values.length;      // Save the number of rows in the range as a variable

  // All assigned lab sections (these are placeholder names for now)
  var labOne = '1,2,3';
  var labTwo = '4';
  var labThree = '5, 6';
  var labFour = '7';
  
  // Loops through the two dimensional array and checks each cell for whether its empty 
  for (let i = 1; i < rowSize; i++) {
    var colSize = values[i].length;
    
    var labSection = values[i][11]; 

    // Creates an array that will be used to store the specific elements that the users have yet to complete
    var incompletedElements = [];
    let k = 0;  // For adding elements into the incompletedElements array (using Array.push() is better)


    
    for (let j = 1; j < colSize - 6; j++) {

        if (j == 10 || j == 23) 
          j++;
        
        // One possible combination - includes labOne but not labThree
        if (labSection.includes(labOne) && !labSection.includes(labThree) && j == 19)   // 
            j++;
        
        // Second possible combination - only includes labTwo
        else if (labSection == labTwo && j == 17)  // 
            j = 21; // Index 21 represents LAB09

        // Third possible combination - office workers
        else if (labSection == labFour && j == 15)  
            j = 23; 
            

        // Fourth possible cominbation - includes labThree (no conditionals since it requires all modules to be completed)

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
