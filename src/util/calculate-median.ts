export default function calculateMedian(data:Array<number>, toFixed = 3):number{
    const dataLength = data.length;
    const sortedData = data.slice().sort((a,b)=>Number(a)-Number(b));
    let median:number;
    if(dataLength & 1)
        median = sortedData[Math.floor(dataLength/2)];
    else median = (sortedData[dataLength/2 - 1] + sortedData[dataLength/2])/2;
    return parseFloat(median.toFixed(toFixed));
}