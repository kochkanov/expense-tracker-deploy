import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { ExpensesFullScreen } from '../Expenses/ExpensesFullScreen'

export const ExpensesDetail = (props) => {
    let params = useParams()
   console.log(props.expenses);
    console.log(params);
  return (
    <div>
        <ExpensesFullScreen expenses={props.expenses} params={params}/>

    </div>
  )
}
