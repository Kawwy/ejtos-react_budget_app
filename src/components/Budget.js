import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);

    const [ubudget, setBudget] = useState('');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-secondary'>
            Budget: {currency}
            <input
                type='number'
                id='ubudget'
                step='10'
                max='20000'
                style={{marginLeft : '0.2rem'}}
                value={budget}
                onChange={(event) => {
                    if(event.target.value > totalExpenses)
                    {
                        alert("You cannot reduce the budget value lower than the spending")
                    }
                    else
                    {
                        setBudget(event.target.value)
                        const expense = {
                            ubudget : ubudget
                        }
                        dispatch({
                            type : 'SET_BUDGET',
                            payload : expense
                        })
                    }
                }}
            >

            </input>
        </div>
    );
}

export default Budget;