import FlavanoidsTable from "./components/flavanoids-table";
import GammaTable from "./components/gamma-table";
function App() {
  return (
    <div className="main_container">
      <h1>
        Manufac Wine-Data Analysis
      </h1>
      <FlavanoidsTable/>
      <GammaTable/>
    </div>
  );
}

export default App;
