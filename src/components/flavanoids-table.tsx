import { TableDataType} from "../types";
import WineData from '../constant/wine-data.json';
import keyBasedDataGroup from "../util/key-based-data-group";
import getFlavanoidsData from "../util/get-flavanoids-data";
import DataTable from "./data-table";
import createTableData from "../util/create-table-data";
const rowNames = ['Flavanoids Mean', 'Flavanoids Median', 'Flavanoids Mode'];
export default function FlavanoidsTable() {
    const groupData = keyBasedDataGroup(WineData, 'Alcohol', getFlavanoidsData);
    const {calculatedData, headings} = createTableData(groupData, rowNames);
    return (
        <div>
            <h3>Flavanoids Mean Mode Median Table</h3>
            <DataTable<TableDataType>
                headings={headings}
                data={calculatedData}
            />
        </div>
    )
}