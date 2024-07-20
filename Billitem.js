import React from 'react';

function BillItem({ bill }) {
    return (
        <div className="border p-2 mb-2">
            <h3 className="font-semibold">{bill.name}</h3>
            <p>Amount: ${bill.amount}</p>
            <p>Due Date: {bill.dueDate}</p>
            <p>Status: {bill.status}</p>
        </div>
    );
}

export default BillItem;