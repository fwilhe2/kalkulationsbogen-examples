# kalkulationsbogen-examples

Example repo for [kalkulationsbogen](https://github.com/fwilhe2/kalkulationsbogen) (a TypeScript library for building spreadsheets).

## Setup

Install dependencies using `yarn`.

## Examples

[Accounts](./accounts/) is an example for tracking different accounts over time.
Run this example with `yarn run accounts`.

[Performance Model](./performance-model/) is an example for calculations based on absolute and relative cell references using named ranges.
Run this example with `yarn run performance`.

## Converting Flat ODS to other formats

With a local install of LibreOffice or using [VSCode dev containers](https://code.visualstudio.com/docs/remote/containers) you can convert the `fods` files to `ods` and `xslx` files which are compatible with more spreadsheet programs.
This can be done using `yarn run convert`.
