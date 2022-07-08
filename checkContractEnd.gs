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


// Start from max length
// If space is = '', then skip
// If we encounter a date that is not = current date, end the function call
// If we encounter a date that is = current date, function call to move the rows