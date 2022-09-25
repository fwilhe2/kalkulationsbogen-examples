import { argv } from "process";

interface programOptions {
  version: boolean;
}

export function parseArgs(args: string[]) {
  const version = args.includes("--version");

  return {
    version: version,
  };
}

argv
  .filter((v, i) => i > 1)
  .forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

const opts = parseArgs(argv.filter((v, i) => i > 1));

if (opts.version) {
  console.log("v 1.0.0");
}
