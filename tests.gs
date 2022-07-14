function tests(email,...array) {
  var spreadSheet = SpreadsheetApp.openById('1e2fwQYrC86XkmxpedP50jVbXjwx6RFEeO8tygoZ9_b4');
 // var array = ['one','two','three'];
  var newString = '';

  for (let i = 0; i < array[0].length; i++)  {
    newString += '-' + array[0][i] + '\n';
  }
  console.log(array);
  console.log(newString);
  
}
