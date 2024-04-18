import type { WineType } from "../types";
// below function helps to group values bases on their class by the name of key, in case of dummy data the key is alcohol
// return a map<number | string, Array<number>
export default function keyBasedDataGroup(data:Array<WineType>, groupKey:keyof WineType, cb:(d:WineType)=>number){
    const groupMap = new Map<number | string, Array<number>>();
    for(const item of data){

        /*
            What is cb or callback function?
            We have to group the data into class , the dummy data present at /constant/wine-data.json, there are three different classes 1,2,3, now we have
            to create two tables, one for gamma and one for flavanoids,
            case 1: calculating and grouping values for key flavanoids is straight forward as the key is simply present in the data
            case 2: for gamma mean, median and mode
                for gamma we have to do some calculation on huw ash and mangnesium after that we will get the values of gamma for every class,
                now instead of creating two different function to group the data according to class one for gamma and one for falavanoids, we just
                utilize the cb, which can be pass when we have to create table for them
        */
        const valueToStore = cb(item);
        const keyName = item[groupKey];
        const values = (groupMap.get(keyName) || []);
        values.push(valueToStore);
        groupMap.set(keyName, values);
    }
    return groupMap;
}