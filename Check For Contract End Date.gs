function checkContractEnd(i,...values) {
  
    // Stores the current date as a variable
    var currentDate = Utilities.formatDate(new Date(), "GMT+8", "MMMM dd, yyyy");
    console.log(values.length);
    while(i < values.length) {
      var reformattedDate = Utilities.formatDate(values[i][0], "GMT+8", "MMMM dd, yyyy");
      if(values[i] == '')
        break;
      if (values[i] == currentDate) 
        moveData(i);
      elsef
        i++;
    }

}


// Start from max length
// If space is = '', then skip
// If we encounter a date that is not = current date, end the function call
// If we encounter a date that is = current date, function call to move the rows