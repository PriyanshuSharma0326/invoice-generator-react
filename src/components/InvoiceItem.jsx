import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBucket } from '@fortawesome/free-solid-svg-icons';

function InvoiceItem({ itemName, itemDescription, itemQuantity, itemPrice }) {
    return (
        <div className="form-item">
            <div className="item-info">
                <input 
                    placeholder='Item name' 
                    type="text" 
                    name="" 
                    id="" 
                    value={itemName}
                />                    
                <input 
                    placeholder='Item description' 
                    type="text" 
                    name="" 
                    id="" 
                    value={itemDescription} 
                />
            </div>

            <div className="item-quantity">
                <input 
                    value={itemQuantity} 
                    type="number" 
                    name="" 
                    id="" 
                />
            </div>

            <div className="item-rate">
                <input 
                    value={itemPrice} 
                    type="number" 
                    name="" 
                    id="" 
                />
            </div>

            <div className="delete-item-button-container">
                <button className="delete-item-button">
                    <FontAwesomeIcon className='bucket-icon' icon={faBucket} />
                </button>
            </div>
        </div>
    )
}

export default InvoiceItem;
