var sheet_id = "1u4WO3mT6qrpiArk1vx0XGPaktYPF199NdCFLDWSutsI";
var sheet_name = "IOT_data";
function doGet(e){
var ss = SpreadsheetApp.openById(sheet_id);
var sheet = ss.getSheetByName(sheet_name);
var sensor = Number(e.parameter.sensor);
var date = Number(e.parameter.date);
sheet.appendRow([sensor,date]);
}
