import path from 'path';
import XLSX from 'xlsx';


export function readDataFromExcelFile(sheetName,scenarioName) {
  const fullPath = process.env.EXCEL_FILE_PATH;
  const workbook = XLSX.readFile(fullPath);
  const worksheet = workbook.Sheets[sheetName];
  const dataFromExcelSheet = XLSX.utils.sheet_to_json(worksheet);
  return dataFromExcelSheet.find(row => row.Scenario === scenarioName);
}