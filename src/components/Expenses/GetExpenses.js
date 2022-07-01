import React from 'react'
import '../NewExpense/NewExpense.css'
export const GetExpenses = (props) => {
  return (
    <div className="new-expense">
    <button type="submit" onClick={props.onGetItems}>
      Get expense
    </button>
  </div>
  )
}
