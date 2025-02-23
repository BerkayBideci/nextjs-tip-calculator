import React, { useState } from 'react';

const Calculator = () => {
    // TODO: start coding here!
    const [bill, setBill] = useState(0)
    const [tip, setTip] = useState(0)
    const [people, setPeople] = useState(1)

    const handleBill = (e) => {
        if (e.target.value >= 0) {
            setBill(e.target.value)
        }
    }

    const handleTip = (e) => {
        if (e.target.value >= 0) {
            setTip(e.target.value)
        }
    }

    const handlePeople = (e) => {
        if (e.target.value >= 1) {
            setPeople(e.target.value)
        }
    }

    const handleReset = () => {
        setBill(0)
        setTip(0)
        setPeople(1)
    }

    const totalTip = parseFloat(bill) * (parseFloat(tip) / 100);
    const totalWithTip = (parseFloat(bill) + parseFloat(totalTip)) / parseInt(people);
    const tipPerPerson = parseFloat(totalTip) / parseInt(people);



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
                            name="Total bill value"
                            id="totalBill"
                            value={bill}
                            onChange={handleBill}
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
                                value={5}
                                onClick={handleTip}>5%
                            </button>
                            <button
                                className="body-l-text input-tip"
                                id="tip10"
                                value={10}
                                onClick={handleTip}>10%
                            </button>
                            <button
                                className="body-l-text input-tip"
                                id="tip15"
                                value={15}
                                onClick={handleTip}>15%
                            </button>
                            <button
                                className="body-l-text input-tip"
                                id="tip25"
                                value={25}
                                onClick={handleTip}>25%
                            </button>
                            <button
                                className="body-l-text input-tip"
                                id="tip50" value={50}
                                onClick={handleTip}>50%
                            </button>
                            <input
                                type="number"
                                className="body-l-text input-field"
                                placeholder="Custom"
                                id="totalTipPercentage"
                                value={tip}
                                onChange={handleTip}></input>
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
                            placeholder="0"
                            name="Number of people"
                            id="numberOfPeople"
                            value={people}
                            onChange={handlePeople}
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