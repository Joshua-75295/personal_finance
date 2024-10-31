import React, { useState } from 'react';
import '../styles.css';

const Expenses = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    const amount = parseFloat(expenseAmount);
    if (expenseName && !isNaN(amount)) {
      const newExpense = { name: expenseName, amount };
      setExpenses([...expenses, newExpense]);
      setExpenseName('');
      setExpenseAmount('');
    } else {
      alert("Please enter a valid expense name and amount.");
    }
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="container">
      <h2>Expenses Page</h2>
      <input
        type="text"
        placeholder="Expense Name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Amount in Rupees"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
      />
      <br />
      <button onClick={addExpense}>Add Expense</button>
      <h3>Expense List:</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name}: ₹{expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total: ₹{totalExpenses.toFixed(2)}</h3>
    </div>
  );
};

export default Expenses;
