import React from 'react';
import '../styles/InvoiceForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBucket } from '@fortawesome/free-solid-svg-icons';

function InvoiceForm() {
    return (
        <div className='form-container'>
            <div className='form-main'>
                <form action="" className="invoice-form">
                    <div className="form-date-section">
                        <div className="form-dates">
                            <p>
                                Current Date: <span id='current-date'>17/6/23</span>
                            </p>

                            <div className="due-date-input">
                                <label htmlFor="due-date">Due Date:</label>

                                <input type="date" name="due-date" id="due-date" />
                            </div>
                        </div>

                        <div className="invoice-number-input">
                            <label htmlFor="invoice-number">Invoice Number:</label>

                            <input min={1} type="number" name="invoice-number" id="invoice-number" />
                        </div>
                    </div>

                    <hr />

                    <div className="form-bill-info-section">
                        <div className="bill-info">
                            <p>Bill to:</p>

                            <input placeholder='Who is this invoice to?' type="text" name="invoice-to" id="bill-to" />
                            <input placeholder='Email address' type="text" name="" id="email" />
                            <input placeholder='Billing Address' type="text" name="" id="address" />
                        </div>

                        <div className="bill-info">
                            <p>Bill from:</p>

                            <input placeholder='Who is this invoice to?' type="text" name="invoice-to" id="bill-from" />
                            <input placeholder='Email address' type="text" name="" id="email" />
                            <input placeholder='Billing Address' type="text" name="" id="address" />
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
                            <div className="form-item">
                                <div className="item-info">
                                    <input placeholder='Item name' type="text" name="" id="" />
                                    
                                    <input placeholder='Item description' type="text" name="" id="" />
                                </div>

                                <div className="item-quantity">
                                    <input value={1} type="number" name="" id="" />
                                </div>

                                <div className="item-rate">
                                    <input value={1.00} type="number" name="" id="" />
                                </div>

                                <div className="delete-item-button-container">
                                    <button className="delete-item-button">
                                        <FontAwesomeIcon className='bucket-icon' icon={faBucket} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button className="add-item-button">Add item</button>
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
                        
                        <textarea id="bill-note" name="bill-note" placeholder='Thanks for your business!'></textarea>
                    </div>
                </form>
            </div>

            <div className='form-review-section'>
                <div className="review-button-container">
                    <button className="review-button">
                        Review
                    </button>
                </div>

                <hr />

                <div className="currency-section">
                    <label htmlFor="currency">Currency: </label>

                    <select name="" id="currency">
                        <option value="dollar">Dollar</option>
                        <option value="rupee">Rupee</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default InvoiceForm;
