import { Table } from '@mantine/core';
/*
    This table component helps to render a Array of objects with N number or row and m number of comlumns.
    ** Note ** 
    The data array must contain only object example:
    data = [{name:"Ramesh", age:22}]
*/

// Define a data object type for objects whose values can be string or number, as a single cell of table can render number or string only
type DataObject<T> = {
    [K in keyof T]: string | number;
}
// the DataTable components take two props only
type props<T> = {
    headings: Array<string>; // array of cloumns heading
    data: Array<DataObject<T>>; // Array of data object which we want to render in the row

}
export default function DataTable<T>({ headings, data = [] }: props<T>) {
    const rows = data.map((item: DataObject<T>, index: number) => {
        const values: Array<string | number> = Object.values(item);
        return (
            <Table.Tr key={index}>
                {values.map((value: string | number, idx: number) => (
                    <Table.Td key={idx}>{value}</Table.Td>
                ))}
            </Table.Tr>
        );
    })
    const tableHeadings = headings.map(title => <Table.Th key={title}>{title}</Table.Th>)
    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    {tableHeadings}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
};
