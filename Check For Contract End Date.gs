function checkContractEnd() {
    var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
   
    // Takes the column containing only the dates of when each contract ends
    var range = spreadSheet.getRangeByName('Contract_End_Dates');
    var values = range.getValues();

    // Stores the current date as a variable
    var currentDate = Utilities.formatDate(new Date(), "GMT+8", "MM/dd/yyyy");
   
    for (let i = 0; i < values.length; i++) {
      if (currentDate == values[i]) 
        moveData(i);
    }
}


// Loop through column --> check if each value is == currentDate
// if it is, call to move data which moves the rows
// Take the row of the user whose contract is ending as a parameter
