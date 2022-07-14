/*
 * Function: checkContractEnd - checks each cell in the column containing the user's contract end date
 * Parameter: i - The starting index of the cell that we start searching from (index 0 = row 1)
 * Parameter: ...values - the array of values containing the contract end dates
 */

function checkContractEnd(i,...values) {
    var maxLength = values[0].length;

    // Stores the current date as a variable
    var currentDate = Utilities.formatDate(new Date(), "GMT+8", "MMMM dd, yyyy");

    var weekAfter = new Date();
    weekAfter.setDate(weekAfter.getDate() + 7);
    weekAfter = Utilities.formatDate(weekAfter, "GMT+8", "MMMM dd, yyyy");

    var weekBefore = new Date();
    weekBefore.setDate(weekBefore.getDate() - 7);
    weekBefore = Utilities.formatDate(weekBefore, "GMT+8", "MMMM dd, yyyy");
    

    while(i > 0)  {
      if (values[i][14] == '')
        i--;
      else  {
        // Reformats the date stored in the spreadsheet to be identical to the format of currentDate
        var reformattedDate = Utilities.formatDate(values[i][14], "GMT+8", "MMMM dd, yyyy");

        var reformattedDateWeekAfter = new Date(values[i][14]);
        reformattedDateWeekAfter.setDate(reformattedDateWeekAfter.getDate() + 7);
        reformattedDateWeekAfter = Utilities.formatDate(reformattedDateWeekAfter, "GMT+8", "MMMM dd, yyyy");
    
        var email = values[i][0];
    
        // Call to move row of data function if the date of the contract's end date is = today's date
        if (reformattedDate == weekAfter) {
          sendContractEndEmail(email, 1);
          i--;
        }
        else if(reformattedDate == currentDate) {
          sendContractEndEmail(email, 2);
          i--;
        }
        else if (reformattedDateWeekAfter == currentDate || values[i][maxLength - 1] != '') {
          moveData(i+1);
          i--;
        }
     
        // If both dates aren't the same, then end the function
        else
          return;
      } 
    } 
}

// NOTES:

// We start decrementing from the end of the array until we reach a data cell that contains a date
// Since the dates are already sorted in descending order, the earliest date will be at the bottom of the column

// If the earliest date isn't = today's date, then every date above it is not = today's date either
// If the earliest date is = today's date, we move it to another sheet and keep checking until we reach a date that is not today's date

// So by checking if the earliest date is = today's date, we lessen the amount of searching and speeds up our algorithm

// If one week before contract end, send email asking if they want to extend their contract
// If on day of contract end, send email again
  // If they are extending the contract, then link to the form telling them to update the new contract end date
// Else
  // After 7 days, automatically archive user data
  // If a user wants to end their contract end, they must fill in the form (a cell that says end contract early)
    // If filled, auto archive user data