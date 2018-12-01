function myOnEdit (e) {
  var queryOBJ = {
    'method' : 'post',
    'contentType': 'application/json',
    "payload": logProductInfo(),
  }
  UrlFetchApp.fetch("ADD URL HERE", queryOBJ);
}

function logProductInfo() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  return JSON.stringify({data: data});
}
