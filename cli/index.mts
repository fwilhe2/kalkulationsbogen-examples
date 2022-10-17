import { buildSpreadsheet, spreadsheetInput } from "kalkulationsbogen";
import { writeFile, readFile } from "node:fs/promises";
import meow from 'meow';

const cli = meow(`
  Usage
    $ cli

  Options
    --input, -i  input json file
`, {importMeta: import.meta, flags: {
  input: {
    type: 'string',
    alias: 'i',
    isRequired: true
  }
}})

const i: spreadsheetInput = JSON.parse(
  (await readFile(cli.flags.input)).toString()
);

const s = await buildSpreadsheet(i)

// Write out the spreadsheet file. This can be opened with LibreOffice.
await writeFile(`${cli.flags.input}.fods`, s);
