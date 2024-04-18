import calculateMean from "./calculate-mean";
import calculateMedian from "./calculate-median";
import calculateMode from "./calculate-mode";
import type { TableDataType } from "../types";

// helps to reduce the data in expected table format in the form of Array of objects
export default function createTableData(groupData:Map<string | number, Array<number>>, rowName:Array<string>) {
    const headings: Array<string> = ['Measure'];
    // 0 mean, 1 mode, 2 median 
    const meanMedianMode: Array<Array<number>> = [...new Array(3)].map((_) => []);
    groupData.forEach((values, key) => {
        // this will help to exactly map the column name and the data from the row
        // as the key order remains constant in js map, we will always going to show corresponding class data in the column
        const className = `Class ${key}`;
        headings.push(className);
        const mean = calculateMean(values);
        const median = calculateMedian(values);
        const mode = calculateMode(values);
        meanMedianMode[0].push(mean);
        meanMedianMode[1].push(median);
        meanMedianMode[2].push(mode);

    });

    // will push the data in the manner of class 1 mean, class 2 mean, class 2 mean
    const calculatedData: TableDataType[] = [];
    for (let i = 0; i < 3; i++) {
        const temp:TableDataType = {a:'', b:0, c:0, d:0};
        temp.a = rowName[i];
        temp.b = meanMedianMode[i][0];
        temp.c = meanMedianMode[i][1];
        temp.d = meanMedianMode[i][2];
        calculatedData.push(temp);
    }
    return {calculatedData, headings};
}