import DataTable from "./components/UI/DataTable";
import Toolbar from "./components/UI/Toolbar";
import { AppProvider } from "./components/context/AppContext";

function App() {
  return (
    <div id="App container pt-4">
      <AppProvider>
        <Toolbar />
        <DataTable />
      </AppProvider>
    </div>
  );
}

export default App;
