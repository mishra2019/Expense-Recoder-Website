import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewRxpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setShowForm(false);
  };
  const [showForm, setShowForm] = useState(false);
  const addNewExpenseHandler = () => {
    setShowForm(true);
  };
  const closeFormHandler = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm && (
        <button type="submit" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onsaveExpenseData={onSaveExpenseDataHandler}
          onClose={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewRxpense;
