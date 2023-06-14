import React from 'react';
import './AccountButton.css';

function AccounButton({ className, onClick }) {
    return (
        <button onClick={onClick} className={`account-button ${className}`}>Аккаунт</button>
    );
}

export default AccounButton; 