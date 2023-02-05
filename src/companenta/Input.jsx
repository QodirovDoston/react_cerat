import React from 'react'
import { useState } from 'react';
export default function Input() {
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);
    const handleChange = (event) => {
        setMessage(event.target.value);
    };
    const handleClick = () => {
        setUpdated(message);
    };
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6 mt-5">
                        <div className="mb-3">
                            <form>
                                <div>
                                    <input
                                        type="text"
                                        id="message"
                                        name="message"
                                        onChange={handleChange}
                                        value={message}
                                    />
                                    <h2>Message: {message}</h2>
                                    <h2>Updated: {updated}</h2>
                                    <button onClick={handleClick}>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}