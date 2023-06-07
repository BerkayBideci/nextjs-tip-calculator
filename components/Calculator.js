import React, { useState } from 'react';

const Calculator = () => {
    const [formData, setFormData] = useState({
        bill: "",
        tip: "",
        people: ""
    })
    const [selectedTip, setSelectedTip] = useState(null);

    const handleChange = (e) => {
        const { name, value, id } = e.target
        if (name === "tip") {
            setSelectedTip(value)
            setFormData({
                ...formData,
                [name]: value >= 0 ? value : ""
            })
        }
        if (id === "customTip") {
            setSelectedTip(null)
            setFormData({
                ...formData,
                [name]: value >= 0 ? value : ""
            })
        }
        if (name === "people") {
            const peopleValue = value >= 1 ? value : 1
            setFormData({
                ...formData,
                [name]: peopleValue
            })
        } else {
            setFormData({
                ...formData,
                [name]: value >= 0 ? value : ""
            })
        }
    }

    const handleReset = () => {
        setFormData({
            bill: "",
            tip: "",
            people: ""
        })
    }

    const totalTip = parseFloat(formData.bill) * (parseFloat(formData.tip) / 100);
    const totalWithTip = (parseFloat(formData.bill) + parseFloat(totalTip)) / parseInt(formData.people);
    const tipPerPerson = parseFloat(totalTip) / parseInt(formData.people);

    return (
        <main>
            <img
                src="./icons/logo.svg"
                className="logo"
                alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting."
            />
            <section className="card">
                <div className="card-left">
                    <div className="input-group" id="totalBillGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="totalBill">Bill</label>
                            <small className="body-text input-error" id="totalBillError">Input field is valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="bill"
                            id="totalBill"
                            value={formData.bill}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group" id="totalTipPercentageGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label">Select Tip %</label>
                            <small className="body-text input-error" id="totalTipPercentageError">Input field is
                                valid</small>
                        </div>
                        <div className="input-tips-container">
                            <button
                                className="body-l-text input-tip"
                                id="tip5"
                                name="tip"
                                value={5}
                                onClick={handleChange}>5%
                            </button>
                            <button
                                className="body-l-text input-tip"
                                id="tip10"
                                name="tip"
                                value={10}
                                onClick={handleChange}>10%
                            </button>
                            <button
                                className="body-l-text input-tip"
                                id="tip15"
                                name="tip"
                                value={15}
                                onClick={handleChange}>15%
                            </button>
                            <button
                                className="body-l-text input-tip"
                                id="tip25"
                                name="tip"
                                value={25}
                                onClick={handleChange}>25%
                            </button>
                            <button
                                className="body-l-text input-tip"
                                id="tip50"
                                name="tip"
                                value={50}
                                onClick={handleChange}>50%
                            </button>
                            <input
                                type="number"
                                className="body-l-text input-field"
                                placeholder="Custom"
                                name="tip"
                                id="customTip"
                                value={selectedTip === null ? formData.tip : ""}
                                onChange={handleChange}></input>
                        </div>
                    </div>

                    <div className="input-group" id="numberOfPeopleGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="numberOfPeople">Number of People</label>
                            <small className="body-text input-error" id="numberOfPeopleError">Input field is
                                valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="1"
                            name="people"
                            id="numberOfPeople"
                            value={formData.people}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="card-right">
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Tip Amount</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong
                            className="strong-text card-price-value"
                            id="tipAmount">
                            {tipPerPerson ? "$" + tipPerPerson.toFixed(2) : "$0.00"}
                        </strong>
                    </section>
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Total</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong
                            className="strong-text card-price-value"
                            id="totalPrice">
                            {totalWithTip ? "$" + totalWithTip.toFixed(2) : "$0.00"}
                        </strong>
                    </section>
                    <button className="btn btn-primary btn-reset" onClick={handleReset}>Reset</button>
                </div>
            </section>
        </main>
    );
};

export default Calculator;