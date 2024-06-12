import React, {useContext} from "react";
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const { dispatch } = useContext(AppContext);
    const handleChange = () => {
        const selectElement = document.getElementById('currency-select');
        const selectedValue = selectElement.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedValue
        });
    } 
    return(
        <div>   
            <select id="currency-select" className="alert alert-secondary" onChange={handleChange}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
}

export default ChangeCurrency;