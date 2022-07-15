function tests(email,...array) {
  var spreadSheet = SpreadsheetApp.openById('1e2fwQYrC86XkmxpedP50jVbXjwx6RFEeO8tygoZ9_b4');

  var c = new Date('December 30, 2022');
  c.setDate(c.getDate());
  c = Utilities.formatDate(c, "GMT+8", "MMMM dd, yyyy");

  var d = new Date('January 2, 2023');
    d.setDate(d.getDate());
    d = Utilities.formatDate(d, "GMT+8", "MMMM dd, yyyy");

  var e = new Date('December 31, 2022');
    e = Utilities.formatDate(e,"GMT+8", "MMMM dd, yyyy");

  console.log(c);
  console.log(d);
  console.log(e);

  if (d > e && e > c)
    console.log('true');

}
