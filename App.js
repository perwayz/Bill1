import React from 'react';
import ReactDOM from 'react-dom';
import BillList from './BillList';
import AddBill from './AddBill';
import './styles.css';

function App() {
    const [bills, setBills] = React.useState([]);

    const addBill = (bill) => {
        setBills([...bills, bill]);
    };

    return (
        <div className="container">
            <h1 className="text-2xl font-bold mb-4">Bill Management Tool</h1>
            <AddBill addBill={addBill} />
            <BillList bills={bills} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));