import { buildSpreadsheet, spreadsheetInput } from "kalkulationsbogen";
import { writeFile, readFile } from "node:fs/promises";

const spreadsheet: spreadsheetInput = [
  ["String", "Float", "Date", "Time", "Currency", "Percentage"],
  [
    {
      value: "ABBA",
      valueType: "string",
    },
    {
      value: "42.3324",
      valueType: "float",
    },
    {
      value: "2022-02-02",
      valueType: "date",
    },
    {
      value: "19:03:00",
      valueType: "time",
    },
    {
      value: "2.22",
      valueType: "currency",
    },
    {
      value: "0.4223",
      valueType: "percentage",
    },
  ],
];

const mySpreadsheet = await buildSpreadsheet(spreadsheet);
await writeFile("mySpreadsheet.fods", mySpreadsheet);


const accounts: spreadsheetInput = JSON.parse((await readFile('accounts.json')).toString())
const sumRow = accounts[0].slice(1).map(year =>  { return {functionName: "SUM", arguments: `YEAR${year}`}})
const accountsSpreadsheet = await buildSpreadsheet(accounts.concat([['Sum', ...sumRow]]));
await writeFile("accountsSpreadsheet.fods", accountsSpreadsheet);
