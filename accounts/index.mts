import { buildSpreadsheet, spreadsheetInput } from "kalkulationsbogen";
import { writeFile, readFile } from "node:fs/promises";

const accounts: spreadsheetInput = JSON.parse(
  (await readFile("accounts/accounts.json")).toString()
);

// slice 1 to ignore the first element because it does not contain a year column.
const years = accounts[0].slice(1);

// Each column has a new year's data. In this row we sum the values for each year so we can compare them.
const sumRow = years.map((year) => {
  return {
    functionName: "SUM",
    arguments: `YEAR${year}`,
    rangeName: `SUM${year}`,
  };
});

// Use the sums we calculated in sumRow to calculate the diff between the years.
const diffRow = years.slice(1).map((year, index) => {
  return { functionName: "", arguments: `SUM${year} - SUM${years[index]}` };
});

// buildSpreadsheet creates the xml with FODS representation of our spreadsheet
const accountsSpreadsheet = await buildSpreadsheet(
  accounts.concat([["Sum", ...sumRow]]).concat([["Diff", "", ...diffRow]])
);

// Write out the spreadsheet file. This can be opened with LibreOffice.
await writeFile("accountsSpreadsheet.fods", accountsSpreadsheet);
