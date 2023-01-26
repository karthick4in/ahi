import React, { useState } from 'react';

// const Alert = (props) => {
export default function LedgerList() {
    const [myArray, setMyArray] = useState([]);

    const addElement = function (newElement) {
        setTheArray(oldArray => [...oldArray, newElement]);
    }
    return (
        <>
            <div id="alert_container">
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </>
    )
}