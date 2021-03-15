import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenseTab from './components/IncomeExpenseTab';
import TransactionList from './components/TransactionList';
import NewTransaction from './components/NewTransaction'


function App() {
  return (
    <>
      <Header />
      <div className="container" >
        <Balance />
        <IncomeExpenseTab />
        <TransactionList />
        <NewTransaction />
      </div>
    </>
  );
}

export default App;
