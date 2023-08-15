import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type : 'DELETE_EXPENSE',
            payload : props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name : name,
            cost : 10,
        };

        dispatch({
            type : 'ADD_EXPENSE',
            payload : expense,
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name : name,
            cost : 10,
        };

        dispatch({
            type : 'RED_EXPENSE',
            payload : expense,
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency} {props.cost}</td>
            <td><FaPlusCircle onClick={event => increaseAllocation(props.name)} style={{color: '#35bd57'}} size='2.2em'></FaPlusCircle></td>
            <td><FaMinusCircle onClick={event => decreaseAllocation(props.name)} style={{color: '#bd3535'}} size='2.2em'></FaMinusCircle></td>
            <td><TiDelete size='2.2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;