import React from 'react';
import './AccountButton.css';

function AccounButton({ className }) {
    return (
        <button className={`account-button ${className}`}>Аккаунт</button>
    );
}

export default AccounButton; 