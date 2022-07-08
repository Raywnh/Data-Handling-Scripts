function checkContractEnd(i,...values) {
  
    // Stores the current date as a variable
    var currentDate = Utilities.formatDate(new Date(), "GMT+8", "MM/dd/yyyy");
    console.log(values.length);
    while(i < values.length) {
      if(values[i] == '')
        break;
      if (values[i] == currentDate) 
        moveData(i);
      elsef
        i++;
    }

}


// Loop through column --> check if each value is == currentDate
// if it is, call to move data which moves the rows
// Take the row of the user whose contract is ending as a parameter
