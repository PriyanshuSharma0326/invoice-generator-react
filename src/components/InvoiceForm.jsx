import React from 'react';
import '../styles/InvoiceForm.css';

function InvoiceForm() {
    return (
        <div className='form-container'>
            <div className='form-main'>
                <form action="" className="invoice-form">
                    <div className="form-date-section">
                        <div className="form-dates">
                            <p id='current-date'>
                                Current Date: <span>17/6/23</span>
                            </p>

                            <div className="due-date-input">
                                <label htmlFor="due-date">Due Date:</label>

                                <input type="date" name="due-date" id="due-date" />
                            </div>
                        </div>

                        <div className="invoice-number-input">
                            <label htmlFor="invoice-number">Invoice Number</label>

                            <input type="number" name="invoice-number" id="invoice-number" />
                        </div>
                    </div>
                </form>
            </div>

            <div className='form-review-section'>
                Review
            </div>
        </div>
    );
}

export default InvoiceForm;
