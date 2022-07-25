/*
 * Function: checkContractEnd - checks each cell in the column containing the user's contract end date
 * Parameter: i - The starting index of the cell that we start searching from
 * Parameter: ...values - the array of values containing the contract end dates
 */

function checkContractEnd(i,...values) {
    var maxLength = values[0].length; 

    // Stores the current date
    var currentDate = Utilities.formatDate(new Date(), "GMT+8", "MMMM dd, yyyy");

    // Stores the date a week after current date
    var weekAfter = new Date();
    weekAfter.setDate(weekAfter.getDate() + 7);
    weekAfter = Utilities.formatDate(weekAfter, "GMT+8", "MMMM dd, yyyy");

    while(i > 0)  {
      if (values[i][14] == '')
        i--;
      else  {
        // Reformats the date stored in the spreadsheet to be identical to the format of currentDate
        var reformattedDate = Utilities.formatDate(values[i][14], "GMT+8", "MMMM dd, yyyy"); 

        // Gets the date a week after a contract will end
        var reformattedDateWeekAfter = new Date(values[i][14]);
        reformattedDateWeekAfter.setDate(reformattedDateWeekAfter.getDate() + 7);
        reformattedDateWeekAfter = Utilities.formatDate(reformattedDateWeekAfter, "GMT+8", "MMMM dd, yyyy");
        
        var email = values[i][0];
        var name = values[i][1];

        // If weekAfter is the contract end date, it means that the contract will end in 7 days, so send an email
        if (reformattedDate == weekAfter) 
          sendContractEndEmail(email,name, 7);
    
        // Send email if date of contract is ending on current date
        else if(reformattedDate == currentDate) 
          sendContractEndEmail(email,name, 0);
      
        // Move the row if a week has passed after contract has ended
        else if (reformattedDateWeekAfter == currentDate) 
          moveData(i+1);
          
      
        // If the date encountered is more than a week after the current date, we stop the function
        else if (reformattedDate > weekAfter)
          return;
               
        i--;
      } 
    } 
}
