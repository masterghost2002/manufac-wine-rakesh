export default function calculateMean(data:Array<number>, toFixed = 3):number{
    const dataLength = data.length;
    // there are few cases in class 3 where the value is in string, so first convert it into number
    const sum = data.reduce((acc, num)=>acc+Number(num),0);
    const mean = sum/dataLength;
    return parseFloat(mean.toFixed(toFixed));
}