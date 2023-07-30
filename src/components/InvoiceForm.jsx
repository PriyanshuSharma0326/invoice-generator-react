import React, { useState } from 'react';
import '../styles/InvoiceForm.css';
import InvoiceItem from './InvoiceItem';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBucket } from '@fortawesome/free-solid-svg-icons';

function InvoiceForm() {
    const getDate = () => {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();

        const formattedDate = `${month}/${day}/${year}`;
        return formattedDate;
    }

    let item = {
        itemName: '',
        itemDescription: '',
        itemQuantity: 1,
        itemPrice: 1,
        itemID: Date.now()
    };

    const [itemList, setItemList] = useState([
        item
    ]);

    const addNewItem = (e) => {
        e.preventDefault();

        setItemList(prev => [...prev, item]);
    }

    const [formInputs, setFormInputs] = useState({
        invoiceNumber: 1,
        dueDate: null,
        receiverName: '',
        receiverEmail: '',
        receiverAddress: '',
        senderName: '',
        senderEmail: '',
        senderAddress: '',
        additionalNote: ''
    });

    const inputHandler = (e) => {
        setFormInputs({
            ...formInputs, 
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className='form-container'>
            <div className='form-main'>
                <form action="" className="invoice-form">
                    <div className="form-date-section">
                        <div className="form-dates">
                            <p>
                                Current Date: <span id='current-date'>{getDate()}</span>
                            </p>

                            <div className="due-date-input">
                                <label htmlFor="due-date">Due Date:</label>

                                <input type="date" name="dueDate" id="due-date" />
                            </div>
                        </div>

                        <div className="invoice-number-input">
                            <label htmlFor="invoice-number">Invoice Number:</label>

                            <input 
                                min={1} 
                                type="number" 
                                name="invoiceNumber" 
                                id="invoice-number" 
                                value={formInputs.invoiceNumber} 
                                onChange={inputHandler} 
                            />
                        </div>
                    </div>

                    <hr />

                    <div className="form-bill-info-section">
                        <div className="bill-info">
                            <p>Bill to:</p>

                            <input 
                                placeholder='Who is this invoice to?' 
                                type="text" 
                                name="receiverName" 
                                id="bill-to" 
                                value={formInputs.receiverName} 
                                onChange={inputHandler} 
                            />
                            <input 
                                placeholder='Email address' type="text" 
                                name="receiverEmail" 
                                id="email" 
                                value={formInputs.receiverEmail} 
                                onChange={inputHandler} 
                            />
                            <input 
                                placeholder='Billing Address' type="text" 
                                name="receiverAddress" 
                                id="address" 
                                value={formInputs.receiverAddress} 
                                onChange={inputHandler} 
                            />
                        </div>

                        <div className="bill-info">
                            <p>Bill from:</p>

                            <input 
                                placeholder='Who is this invoice from?' 
                                type="text" 
                                name="senderName" 
                                id="bill-from" 
                                value={formInputs.senderName} 
                                onChange={inputHandler} 
                                />
                            <input 
                                placeholder='Email address' type="text" 
                                name="senderEmail" 
                                id="email" 
                                value={formInputs.senderEmail} 
                                onChange={inputHandler} 
                            />
                            <input 
                                placeholder='Billing Address' type="text" 
                                name="senderAddress" 
                                id="address" 
                                value={formInputs.senderAddress} 
                                onChange={inputHandler} 
                            />
                        </div>
                    </div>

                    <div className="form-items-section">
                        <div className="list-header">
                            <p className="header-item-title">item</p>
                            <p className="header-item-quantity">qty</p>
                            <p className="header-item-rate">price/rate</p>
                            <p className="header-item-action">action</p>
                        </div>

                        <div className="items-container">
                            {itemList.map(item => {
                                return (
                                    <InvoiceItem 
                                        key={item.itemID} 
                                        {...item}
                                    />
                                );
                            })}
                        </div>

                        <button className="add-item-button" onClick={addNewItem}>Add item</button>
                    </div>

                    <div className="form-totals">
                        <div className="subtotal-info">
                            <p>Subtotal:</p>

                            <p className="subtotal">$1.00</p>
                        </div>
                        <div className="discount-info">
                            <p>Discount:</p>

                            <p className="discount"><span className='discount-rate'>(0%)</span>$0.00</p>
                        </div>
                        <div className="tax-info">
                            <p>Tax:</p>

                            <p className="tax"><span className='tax-rate'>(0%)</span>$0.00</p>
                        </div>

                        <hr />

                        <div className="total-info">
                            <p>Total:</p>

                            <p className="total">$1</p>
                        </div>
                    </div>

                    <hr />

                    <div className="bill-note-section">
                        <label htmlFor="bill-note">Notes:</label>
                        
                        <textarea id="bill-note" name="additionalNote" placeholder='Thanks for your business!'></textarea>
                    </div>
                </form>
            </div>

            <div className='form-review-section'>
                <div className="review-button-container">
                    <button className="review-button">
                        Review Invoice
                    </button>
                </div>

                <hr />

                <div className="currency-section">
                    <label htmlFor="currency">Currency: </label>

                    <select name="" id="currency">
                        <option value="usd">USD (United States Dollar)</option>
                        <option value="gbp">GBP (British Pound Sterling)</option>
                        <option value="cad">CAD (Canadian Dollar)</option>
                        <option value="aud">AUD (Australian Dollar)</option>
                        <option value="sgd">SGD (Singapore Dollar)</option>
                        <option value="jpy">JPY (Japanese Yen)</option>
                        <option value="cny">CNY (Chinese Renminbi)</option>
                        <option value="inr">INR (Indian Rupee)</option>
                        <option value="btc">BTC (Bitcoin)</option>
                        <option value="doge">DOGE (Dogecoin)</option>
                    </select>
                </div>

                <div className="tax-input">
                    <label htmlFor="tax-rate">Tax rate: </label>

                    <div className="tax-input-container">
                        <input type="number" name="" id="tax-rate" />
                    </div>
                </div>

                <div className="discount-input">
                    <label htmlFor="discount-rate">Discount rate: </label>

                    <div className="discount-input-container">
                        <input type="number" name="" id="discount-rate" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvoiceForm;
