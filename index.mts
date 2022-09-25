import { buildSpreadsheet, spreadsheetInput } from "kalkulationsbogen";
import { writeFile } from "node:fs/promises";

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
