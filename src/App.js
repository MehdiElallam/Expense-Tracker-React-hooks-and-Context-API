import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenseTab from './components/IncomeExpenseTab';
import TransactionList from './components/TransactionList';
import NewTransaction from './components/NewTransaction'
import { ContextProvider } from './context/AppContext'


function App() {
  return (
    <ContextProvider>
        <Header />
        <div className="container" >
          <Balance />
          <IncomeExpenseTab />
          <TransactionList />
          <NewTransaction />
        </div>
    </ContextProvider>
  );
}

export default App;
