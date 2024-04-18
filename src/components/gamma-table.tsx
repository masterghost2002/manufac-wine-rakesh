import WineData from '../constant/wine-data.json';
import keyBasedDataGroup from "../util/key-based-data-group";
import getGammaData from '../util/get-gamma-data';
import DataTable from "./data-table";
import createTableData from '../util/create-table-data';
import { TableDataType } from '../types';
const rowName = ['Gamma Mean', 'Gamma Median', 'Gamma Mode'];
export default function GammaTable() {

    const groupData = keyBasedDataGroup(WineData, 'Alcohol', getGammaData);
    const {calculatedData, headings} = createTableData(groupData, rowName);
    return (
        <div>
            <h3>Gamma Mean Mode Median Table</h3>
            <DataTable<TableDataType>
                headings={headings}
                data={calculatedData}
            />
        </div>
    )
}