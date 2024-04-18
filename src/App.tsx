import DataTable from "./components/data-table";
type CustomType = {
  position:number;
  mass:number;
  symbol:string;
  name:string;
}
const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];
function App() {
  return (
    <div className="main_container">
      <h1>
        Manufac Wine-Data Analysis
      </h1>
      <DataTable<CustomType>
        headings={['Element pos', 'name', 'syb', 'atomic']}
        data={elements}
      />
    </div>
  );
}

export default App;
