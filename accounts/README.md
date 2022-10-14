# Accounts Example

This example showcases how kalkulationsbogen can be used to track the value of accounts over time.

The data in this example has the following format:

|       | 2020 | 2021 | 2022 |
| ----- | ---- | ---- | ---- |
| acc 1 |      |      |      |
| acc 2 |      |      |      |
| acc 3 |      |      |      |

See [`accounts.json`](./accounts.json) for the actual example data.

The generated spreadsheet contains the input data and additionally a sum and a diff row.
Sum and diff are not calculated in the js code, but are written as spreadsheet formula, so the spreadsheet software will calculate it on opening the file.
