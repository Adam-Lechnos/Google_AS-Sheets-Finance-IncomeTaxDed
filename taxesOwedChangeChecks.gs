function checkTaxOwedChangeSnapShot() {

  var activeSheet = SpreadsheetApp.getActive().getSheetByName('taxes_owed_change_checks');

  var checkOwedAdam = activeSheet.getRange('B3').getValue();
  var checkOwedSarah = activeSheet.getRange('B4').getValue();
  var checkOwedMarried = activeSheet.getRange('B5').getValue();

  var checkObligAdam = activeSheet.getRange('B14').getValue();
  var checkObligSarah = activeSheet.getRange('B15').getValue();
  var checkObligMarried = activeSheet.getRange('B16').getValue();

  activeSheet.getRange('c3').setValue(checkOwedAdam);
  activeSheet.getRange('c4').setValue(checkOwedSarah);
  activeSheet.getRange('c5').setValue(checkOwedMarried);

  activeSheet.getRange('c14').setValue(checkObligAdam);
  activeSheet.getRange('c15').setValue(checkObligSarah);
  activeSheet.getRange('c16').setValue(checkObligMarried);

  var currDateTime = Utilities.formatDate(new Date(), "GMT-5", "MM/dd/yyyy")
  
  activeSheet.getRange('h1').setValue(currDateTime);  
  
}
