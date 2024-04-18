export default function calculateMode(data:Array<number>):number{
    const frequencyMap = new Map<number, number>();
    for(const item of data){
        const num = Number(item);
        frequencyMap.set(num, (frequencyMap.get(num) || 0)+1);
    }

    let mode:number | undefined;
    let maxFrequency = 0;
    frequencyMap.forEach((frequency:number, item:number)=>{
        if(frequency>maxFrequency){
            mode = item;
            maxFrequency = frequency;
        }
    });
    return mode === undefined?Math.min():mode;
}