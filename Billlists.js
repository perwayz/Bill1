import React from 'react';
import BillItem from './BillItem';

function BillList({ bills }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Bills</h2>
            {bills.map((bill, index) => (
                <BillItem key={index} bill={bill} />
            ))}
        </div>
    );
}

export default BillList;