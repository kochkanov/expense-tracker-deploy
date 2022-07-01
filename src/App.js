import { useCallback, useState } from "react";
import "./components/NewExpense/NewExpense.css";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import ".//components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EXPENSE_DATA } from "./itils/general";
import { GetExpenses } from "./components/Expenses/GetExpenses";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { ExpensesDetail } from "./components/NewExpense/ExpensesDetail";

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  const notify = (note) => {
    if (note === "POST sended" || note === "We have a data") {
      return toast.success(note);
    }
    if (note === "ERROR" || note === "We have not a data") {
      return toast.error(note);
    }
  };

  async function saveDataToList(objectWithId) {
    console.log(objectWithId);
    try {
      await fetch(`${EXPENSE_DATA}items.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objectWithId),
      });
      notify("POST sended");
    } catch (error) {
      notify("ERROR");
    }
  }

  const getItemsHandler = useCallback(async () => { 
    notify("We have data");
    try {
      const response = await fetch(`${EXPENSE_DATA}items.json`);
      const data = await response.json();
     

      const newItems = [];
      for (const key in data) {
        newItems.push({
          id: key,
          title: data[key].title,
          date: new Date(data[key].date),
          amount: data[key].amount,
        });
      }

      setData(newItems);
    } catch (error) {
      notify("We have not data");
    }
  }, []);

  return (
    <Layout>
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          <NewExpense onSaveDataToList={saveDataToList} />
        </Route>

        <Route path="/expenses" exact>
          <GetExpenses onGetItems={getItemsHandler} />
          <Expenses expenses={data} />
        </Route>

        <Route path="/expenses/:expenseId">
          <ExpensesDetail expenses={data} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
