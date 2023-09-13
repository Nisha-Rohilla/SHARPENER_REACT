// import logo from './logo.svg';
// import './App.css';

import { ExpenseItem } from './Components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 100,
      date: new Date(2020, 7, 14),
      localExpenditure: "pune"
    },
    {
      id: "e2",
      title: "T.V",
      amount: 30000,
      date: new Date(2022, 1, 1),
      localExpenditure: "Delhi"
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 3000,
      date: new Date(2021, 4, 5),
      localExpenditure: "Rajasthan"
    },
    {
      id: "e4",
      title: "new desk",
      amount: 13000,
      date: new Date(2023, 4, 5),
      localExpenditure: "Gurugram"

    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        {/* <ExpenseItem title={LocationOfExpenditure[0].food} movie={LocationOfExpenditure[1].Movies} oil={LocationOfExpenditure[2].Petrol}></ExpenseItem> */}
        {/* <ExpenseItem movie={LocationOfExpenditure[1].Movies}></ExpenseItem> */}
        {/* <ExpenseItem oil={LocationOfExpenditure[2].Petrol}></ExpenseItem> */}

        {expenses.map((expense,index) => (
          <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} localExpenditure={expense.localExpenditure}></ExpenseItem>
        ))}


      </header>

    </div>
  );
}

export default App;
