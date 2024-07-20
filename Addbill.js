import React, { useState } from 'react';

function AddBill({ addBill }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBill({ name, amount, dueDate, status });
        setName('');
        setAmount('');
        setDueDate('');
        setStatus('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Bill Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 mb-2"
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border p-2 mb-2"
                required
            />
            <input
                type="date"
                placeholder="Due Date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border p-2 mb-2"
                required
            />
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border p-2 mb-2"
                required
            >
                <option value="">Status</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
            </select>
            <button type="submit" className="button">Add Bill</button>
        </form>
    );
}

export default AddBill;