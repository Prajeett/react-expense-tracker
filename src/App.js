import "./App.css";
import {Header }  from "./components/Header";
import { Balance } from "./components/Balance";
import {IncExp} from "./components/IncExp";
import {TranscationList} from "./components/TranscationList";
import {AddTransactions} from "./components/AddTransactions";
import { GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
      <Header />

      <div className="container">
        <Balance />
        <IncExp />
        <TranscationList />
        <AddTransactions />

      </div>
    </GlobalProvider>
  );
}

export default App;




