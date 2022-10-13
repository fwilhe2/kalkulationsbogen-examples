import { exec } from "child_process";
import { readdir } from "fs/promises";
import { promisify } from "node:util";
import path from "path";

// Convert Flat ODS format to "normal" ODS and XSLX files

const source = path.join(".");
const target = path.join(".");
const e = promisify(exec);

async function convertTo(format: "xlsx" | "ods", file: string) {
  const command = `libreoffice --headless --convert-to ${format} ${path.join(
    source,
    file
  )} --outdir ${target}`;
  console.log(">", command);
  const p = await e(command);
  console.log(p.stdout);
  console.log(p.stderr);
}

async function convertTestFiles() {
  try {
    const files = await readdir(source);
    for (const file of files) {
      if (file.endsWith("fods")) {
        await convertTo("xlsx", file);
        await convertTo("ods", file);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

convertTestFiles();
