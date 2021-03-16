import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenseTab from './components/IncomeExpenseTab';
import TransactionList from './components/TransactionList';
import NewTransaction from './components/NewTransaction'
import { GlobalProvider } from './context/GlobalContext'


function App() {
  return (
    <GlobalProvider>
        <Header />
        <div className="container" >
          <Balance />
          <IncomeExpenseTab />
          <TransactionList />
          <NewTransaction />
        </div>
    </GlobalProvider>
  );
}

export default App;
