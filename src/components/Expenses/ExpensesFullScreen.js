import React from 'react'
import { useLocation } from 'react-router-dom'
import classes from './ExpensesFullScreen.module.css'
export const ExpensesFullScreen = (props) => {
  const location = useLocation()
  console.log(location);
 const items = props.expenses.filter((el)=>el.id === props.params.expenseId)
 console.log(items);
  return<>
  {items.map((i)=>
  <div key={i.id} className={classes.expenses}>
            <p>Title: {i.title}</p>
        <figcaption>Price: {i.amount}</figcaption> 
        </div>)}
  </>
         
    
  
}
