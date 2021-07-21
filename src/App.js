import "./App.css";
import BasicTable from "./components/BasicTable";
import FilteringTable from "./components/FilteringTable";
import HeaderGroup from "./components/HeaderGoup";
import PaginationTable from "./components/PaginationTable";
import SortingTable from "./components/SortingTable";

function App() {
  return (
    <div className="App">
      <PaginationTable />

      {/* for filtering table based on globel filter and column filter 
      <FilteringTable /> */}
      {/* for sorting table based on header in ascending and descending
      <SortingTable /> */}

      {/* for group header example */}
      {/* <HeaderGroup />  */}
    </div>
  );
}

export default App;
