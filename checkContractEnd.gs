function checkContractEnd(i,...values) {
  
    // Stores the current date as a variable
    var currentDate = Utilities.formatDate(new Date(), "GMT+8", "MMMM dd, yyyy");

    while(i > 0)  {
      if (values[i][0] == '')
        i--;
      else  {
        // Reformats the date stored in the spreadsheet to be identical to the format of currentDate
        var reformattedDate = Utilities.formatDate(values[i][0], "GMT+8", "MMMM dd, yyyy");
        
        // Call to move row of data function if the date of the contract's end date is = today's date
        if (reformattedDate == currentDate) {
          moveData(i+1);
          i--;
        }
        // If both dates aren't the same, then exit the function
        else
          return;
      }
    }
}

// We start decrementing from the end of the array until we reach a data cell that contains a date
// Since the dates are already sorted in descending order, the earliest date will be at the bottom of the column

// If the earliest date isn't = today's date, then every date above it is not = today's date either
// If the earliest date is = today's date, we move it to another sheet and keep checking until we reach a date that is not today's date

// So by checking if the earliest date is = today's date, we lessen the amount of searching and speeds up the process of our algorithm
