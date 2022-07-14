function tests(email,...array) {
  var spreadSheet = SpreadsheetApp.openById('1e2fwQYrC86XkmxpedP50jVbXjwx6RFEeO8tygoZ9_b4');
  
  var weekAgo = new Date();
  var newDate = weekAgo.setDate(weekAgo.getDate() - 7);
  var currentDate = Utilities.formatDate(new Date(), "GMT+8", "MMMM dd, yyyy");
  var date_1 = Utilities.formatDate(weekAgo, "GMT+8", "MMMM dd, yyyy");
  console.log(date_1);
  console.log(currentDate);
  if (currentDate == date_1)
    console.log('success');
}
