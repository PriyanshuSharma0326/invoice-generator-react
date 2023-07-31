import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBucket } from '@fortawesome/free-solid-svg-icons';

import { ItemsContext } from '../context/ItemsContext';

function InvoiceItem({ itemID, itemName, itemDescription, itemQuantity, itemPrice }) {
    const { removeFromList } = useContext(ItemsContext);

    let [itemInputs, setItemInputs] = useState({
        itemName: itemName,
        itemDescription: itemDescription,
        itemQuantity: itemQuantity,
        itemPrice: itemPrice,
    });

    const handleChange = (e) => {
        e.preventDefault();

        setItemInputs({
            ...itemInputs, 
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="form-item">
            <div className="item-info">
                <input 
                    placeholder='Item name' 
                    type="text" 
                    name="itemName" 
                    value={itemInputs.itemName} 
                    onChange={handleChange} 
                />
                <input 
                    placeholder='Item description' 
                    type="text" 
                    name="itemDescription" 
                    value={itemInputs.itemDescription} 
                    onChange={handleChange} 
                />
            </div>

            <div className="item-quantity">
                <input 
                    value={itemInputs.itemQuantity} 
                    type="number" 
                    name="itemQuantity" 
                    onChange={handleChange} 
                    min={0} 
                />
            </div>

            <div className="item-rate">
                <input 
                    value={itemInputs.itemPrice} 
                    type="number" 
                    name="itemPrice" 
                    onChange={handleChange} 
                    min={0} 
                />
            </div>

            <div className="delete-item-button-container">
                <button 
                    className="delete-item-button" 
                    onClick={(e) => {
                        e.preventDefault();
                        removeFromList(itemID);
                    }} 
                >
                    <FontAwesomeIcon className='bucket-icon' icon={faBucket} />
                </button>
            </div>
        </div>
    )
}

export default InvoiceItem;
