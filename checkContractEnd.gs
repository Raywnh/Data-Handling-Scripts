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
        var name = values[i][1];
    
        // If the today's date is one week before the contract end date, send email
        if (reformattedDate == weekAfter) 
          sendContractEndEmail(email,name, 7);
    
        // Send email if date of contract is ending on current date
        else if(reformattedDate == currentDate) 
          sendContractEndEmail(email,name, 0);
      
        // Move the row if a week has passed after contract has ended
        else if (reformattedDateWeekAfter == currentDate) 
          moveData(i+1);
          
      
        // If the date encountered is more than a week after the current date, we stop the function as it applies to everything else above
        else if (reformattedDate > weekAfter)
          return;
               
        i--;
      
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
  