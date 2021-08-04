import "./App.css";
import BasicTable from "./components/BasicTable";
import ColumnHiding from "./components/ColumnHiding";
import ColumnOrder from "./components/ColumnOrder";
import FilteringTable from "./components/FilteringTable";
import HeaderGroup from "./components/HeaderGoup";
import PaginationTable from "./components/PaginationTable";
import RowSelection from "./components/RowSelection";
import SortingTable from "./components/SortingTable";
import { StickyTable } from "./components/StickyTable";

function App() {
  return (
    <div>
      {/* <ColumnHiding /> */}
      {/* <StickyTable /> */}

      {/* to change column order
      <ColumnOrder /> */}

      {/* to select particular rows 
      <RowSelection /> */}
      {/* to paginate whole table into simpler parts */}
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
