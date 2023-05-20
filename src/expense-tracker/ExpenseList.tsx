import { useState } from "react";
import { object } from "zod";


interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void;
}


function ExpenseList({expenses, onDelete}:Props) {
    if(expenses.length == 0)
        return null

    return(
        <>
             <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                    </tr>
                </thead>
                    

                <tbody>
                    {expenses.map((expense) => <tr key={expense.id}>
                        <td> {expense.description} </td>
                        <td> {expense.amount} </td>
                        <td> {expense.category} </td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() => onDelete(expense.id)}> Delete </button>
                        </td>
                    </tr>)}
                </tbody>

                <tfoot>
                    <tr>
                        <td> Total </td>
                        {/** This will calculate the total amount in the array */}
                        <td> ${expenses.reduce((accumulator, expense) => expense.amount + accumulator, 0).toFixed(2)} </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
               
            </table>
        </> 
    )

}

export default ExpenseList;