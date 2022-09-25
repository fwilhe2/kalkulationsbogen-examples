import test from "node:test";
import { strict as assert } from "node:assert";
import { parseArgs } from "./index.mjs";

test("can parse version arg with multiple args", () => {
  const actual = parseArgs(["foo", "foo", "foo", "--version"]);
  const expected = { version: true };
  assert(actual["version"] == expected["version"]);
});

test("can parse version arg with one arg", () => {
  const actual = parseArgs(["--version"]);
  const expected = { version: true };
  assert(actual["version"] == expected["version"]);
});
