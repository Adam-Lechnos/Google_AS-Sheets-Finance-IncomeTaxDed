function sendEmailTaxOwedChangeCheck() {

  var activeSheet = SpreadsheetApp.getActive().getSheetByName('taxes_owed_change_checks');

  var checkWarning = activeSheet.getRange('H24').getValue();
  var currDateTime = Utilities.formatDate(new Date(), "GMT-5", "MM/dd/yyyy")

  if (checkWarning == true){
    var emailAddress = 'adam.lechnos@gmail.com';
    var message = 'Taxes owed or taxes withheld have changed enough to warrant an email notification, please check: https://docs.google.com/spreadsheets/d/151oGahyfEzX1qpe7UNWbROPH1Wg1p4nX-1mZI0LnfQ4/edit#gid=718454886'; // Second column
    var subject = 'Taxes Owed/Withheld Change Warning';
    MailApp.sendEmail(emailAddress, subject, message);

    //send email sent timestamp
    var currDateTimeEmail = Utilities.formatDate(new Date(), "GMT-5", "MM/dd/yyyy")
    activeSheet.getRange('h26').setValue(currDateTimeEmail);
  }
  
  //send script run time stamp
  activeSheet.getRange('h25').setValue(currDateTime);
  console.log(checkWarning) 

}
