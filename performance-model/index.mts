import { buildSpreadsheet, spreadsheetInput } from "kalkulationsbogen";
import { writeFile } from "node:fs/promises";

const mySpreadsheet: spreadsheetInput = [
  [
    // The first row contains data which the calculations depend on.
    // Those values can be changed in the spreadsheet and the calculated values will be updated accordingly.
    "Problem Size X",
    { rangeName: "problemSizeX", value: "100", valueType: "float" },
    "Problem Size Y",
    { rangeName: "problemSizeY", value: "100", valueType: "float" },
    "Compute Time per Cell",
    { rangeName: "calculationTimePerCell", value: "10", valueType: "float" },
    "Number of Ops",
    { rangeName: "numberOfOperations", value: "1", valueType: "float" },
    "Communication Time per Cell",
    { rangeName: "communicationTimePerCell", value: "200", valueType: "float" },
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
      rangeName: "numberOfCpus",
      value: numberOfCpus.toString(),
      valueType: "float",
    },
    {
      rangeName: "timeParallel",
      functionName: "",
      arguments:
        "(problemSizeX/numberOfCpus)*problemSizeY*calculationTimePerCell*numberOfOperations+communicationTimePerCell*numberOfCpus",
    },
    {
      rangeName: "timeSequential",
      functionName: "",
      arguments:
        "problemSizeX*problemSizeY*calculationTimePerCell*numberOfOperations",
    },
    {
      rangeName: "speedup",
      functionName: "",
      arguments: "timeSequential/timeParallel",
    },
    {
      rangeName: "efficiency",
      functionName: "",
      arguments: "speedup/numberOfCpus",
    },
  ]);
}

const performanceSpreadsheet = await buildSpreadsheet(mySpreadsheet);

// Write out the spreadsheet file. This can be opened with LibreOffice.
await writeFile("performance.fods", performanceSpreadsheet);
