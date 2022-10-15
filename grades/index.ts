import { buildSpreadsheet, spreadsheetInput } from "kalkulationsbogen";
import { readFile, writeFile } from "node:fs/promises";

const grades: string[] = JSON.parse(
    (await readFile("grades/grades.json")).toString()
  );


  const countedNames = grades.reduce((allgrades: string[], name:string) => {
    const currCount = allgrades[name] ?? 0;
    return {
      ...grades,
      [name]: currCount + 1,
    };
  }, {});

grades.map(g => ([
    {
        value: g,
        valueType: "float",
        rangeName: 'grades'
    }
]))

const mySpreadsheet: spreadsheetInput = [
    [
        {
            value: '-3',
            valueType: "float",
            rangeName: 'grades'
        },
        {
            value: '1',
            valueType: "float",
            rangeName: 'count'
        },
        {
            value: '0',
            valueType: "float",
            rangeName: 'grades'
        },
        {
            value: '6',
            valueType: "float",
            rangeName: 'count'
        },
        {
            value: '2',
            valueType: "float",
            rangeName: 'grades'
        },
        {
            value: '5',
            valueType: "float",
            rangeName: 'count'
        },

    ]
]