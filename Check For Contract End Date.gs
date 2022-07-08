function checkContractEnd(i,...values) {
  
    // Stores the current date as a variable
    var currentDate = Utilities.formatDate(new Date(), "GMT+8", "MMMM dd, yyyy");

    while(i > 0)  {
      if (values[i][0] == '')
        i--;
      else  {
        var reformattedDate = Utilities.formatDate(values[i][0], "GMT+8", "MMMM dd, yyyy");
        if (reformattedDate == currentDate) {
          moveData(i+1);
          i--;
        }
        else
          return;
      }
    }
}


// Start from max length
// If space is = '', then skip
// If we encounter a date that is not = current date, end the function call
// If we encounter a date that is = current date, function call to move the rows