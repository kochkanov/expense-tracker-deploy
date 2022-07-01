import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { Link } from "react-router-dom";


function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
      <Link to={`/expenses/${props.id}`}>Text</Link>
    </div>
  );
}

export default ExpenseItem;
