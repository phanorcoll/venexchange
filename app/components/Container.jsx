import React from 'react';
import CurrencyCard from './CurrencyCard.jsx';
import Eth from '../images/ETH.svg';
const Container = () => {
    return (
        <div className="main-wrapper">
            <div className="card-wrapper">
                <div className="dolartoday">
                    <CurrencyCard faicon="fa-usd" currency="dolartoday" title="Dolartoday" currencySymbol="Bs." />
                </div>
                <div className="bitcoin">
                    <CurrencyCard faicon="fa-btc" currency="bitcoin" title="bitcoin" currencySymbol="USD." />
                </div>
                <div className="etherium">
                    <CurrencyCard currencyIcon={Eth} currency="ethereum" title="Ethereum" currencySymbol="USD." />
                </div>
            </div>
        </div>
    );
}

export default Container;