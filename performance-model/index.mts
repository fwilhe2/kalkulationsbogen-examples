import { buildSpreadsheet, spreadsheetInput } from "kalkulationsbogen";
import { writeFile } from "node:fs/promises";

const mySpreadsheet: spreadsheetInput = [
  [
    // The first row contains data which the calculations depend on.
    // Those values can be changed in the spreadsheet and the calculated values will be updated accordingly.
    "Problem Size X",
    { range: "problemSizeX", value: "100", valueType: "float" },
    "Problem Size Y",
    { range: "problemSizeY", value: "100", valueType: "float" },
    "Compute Time per Cell",
    { range: "calculationTimePerCell", value: "10", valueType: "float" },
    "Number of Ops",
    { range: "numberOfOperations", value: "1", valueType: "float" },
    "Communication Time per Cell",
    { range: "communicationTimePerCell", value: "200", valueType: "float" },
  ],
  [
    "Number of CPUs",
    "Parallel Computing Time",
    "Sequential Computing Time",
    "Speedup",
    "Efficiency",
  ],
];
for (let numberOfCpus = 1; numberOfCpus < 25; numberOfCpus++) {
  mySpreadsheet.push([
    {
      range: "numberOfCpus",
      value: numberOfCpus.toString(),
      valueType: "float",
    },
    {
      range: "timeParallel",
      functionName: "",
      arguments:
        "(problemSizeX/numberOfCpus)*problemSizeY*calculationTimePerCell*numberOfOperations+communicationTimePerCell*numberOfCpus",
    },
    {
      range: "timeSequential",
      functionName: "",
      arguments:
        "problemSizeX*problemSizeY*calculationTimePerCell*numberOfOperations",
    },
    {
      range: "speedup",
      functionName: "",
      arguments: "timeSequential/timeParallel",
    },
    {
      range: "efficiency",
      functionName: "",
      arguments: "speedup/numberOfCpus",
    },
  ]);
}

const performanceSpreadsheet = await buildSpreadsheet(mySpreadsheet);

// Write out the spreadsheet file. This can be opened with LibreOffice.
await writeFile("performance.fods", performanceSpreadsheet);
