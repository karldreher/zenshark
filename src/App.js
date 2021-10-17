import "./App.css";
import Search from "./components/Search.js";
import Table from "./components/Table.js";
import LogoHeader from "./components/LogoHeader.js";

function App() {
  return (
    <div className="App">
      <LogoHeader />
      <Search />
      <Table />
    </div>
  );
}

export default App;
