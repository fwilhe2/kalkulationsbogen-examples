import assert from "assert";
import { buildSpreadsheet, spreadsheetInput, cell, A1 } from "kalkulationsbogen";

function a1(column: number, row: number): string {
    return `[.${A1(column, row)}]`
}

type arg = number | string | (() => unknown)

function SUM(...args: arg[]): string {
    return `SUM(${args.join(';')})`
}

function AVERAGE(...args: arg[]): string {
    return `AVERAGE(${args.join(';')})`
}

function ARABIC(arg: string): string {
    return `ARABIC(&quot;${arg}&quot;)`
}

// of:=SUM(1;2;3)
assert(SUM(1,2,3) === 'SUM(1;2;3)')

// of:=SUM(AVERAGE(1;2;3);1;2;3)
assert(SUM(AVERAGE(1,2,3), 1,2,3) === 'SUM(AVERAGE(1;2;3);1;2;3)')

// of:=SUM([.B3];[.B4];[.B5])
assert(SUM(a1(2,3), a1(2,4), a1(2,5)) === 'SUM([.B3];[.B4];[.B5])')

//of:=SUM(RANGE_2020)
assert(SUM("RANGE_2020") === 'SUM(RANGE_2020)')

assert(ARABIC('viii') === 'ARABIC(&quot;viii&quot;)')