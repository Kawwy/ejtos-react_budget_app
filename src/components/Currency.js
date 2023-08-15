import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const [currency, setCurrency] = useState('');

    return (
        <div className='input-options'>
            <label className='alert alert-success' htmlFor='inputGroupSelect1' style={{backgroundColor : '#93e499', color : '#fff'}}>
                Currency &nbsp;
                <select className='customSelect' id='inputGroupSelect1' style={{backgroundColor : '#93e499', color : '#fff'}} onChange={(event) => {
                    setCurrency(event.target.value);
                    const expense = {
                        currency : currency
                    }

                    dispatch({
                        type : 'CHG_CURRENCY',
                        payload : expense
                    });
                }}>
                    <option defaultValue='£'>£ Pound</option>
                    <option value='$'>$ Dollar</option>
                    <option value='€'>€ Euro</option>
                    <option value='₹'>₹ Rupee</option>
                </select>
            </label>
        </div>
    )
};

export default Currency;