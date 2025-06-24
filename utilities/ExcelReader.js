import * as fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';

//const excelFolderPath = 'testData' + path.sep;

export function readDataFromExcelFile(sheetName,scenarioName) {
  const fullPath = process.env.EXCEL_FILE_PATH;
  if (!fs.existsSync(fullPath)) {
    throw new Error(`CANNOT FIND FILE ${fullPath}. PLEASE MAKE SURE IT EXISTS!`);
  }
  const workbook = XLSX.readFile(fullPath);
  const worksheet = workbook.Sheets[sheetName];
  const dataFromExcelSheet = XLSX.utils.sheet_to_json(worksheet);
//   return dataFromExcelSheet;
// const foundRow = dataFromExcelSheet.find(row => row.Scenario === "AllValidFields");
// if (foundRow) {
//         console.log("Found row:", foundRow);
//     } else {
//         console.log("Row not found.");
//     }
  return dataFromExcelSheet.find(row => row.Scenario === scenarioName);
}