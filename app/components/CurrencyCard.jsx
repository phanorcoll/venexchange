import React from 'react';
import PropTypes from 'prop-types';

const CurrencyCard = (props) => {

    return (
        <div className="card">
            <div className="inner-wrapper">
                <div className="title">
                    {props.title}
                </div>
                <div className="currency-icon">
                    {props.currencyIcon ? <img src={props.currencyIcon} alt="Bitcoin" /> : <i className={`fa ${props.faicon}  ${props.currency}`} aria-hidden="true"></i>}
                </div>
                <div className="currency-amount">
                    {`${props.currencySymbol} ${props.amount}`}
                </div>
            </div>
        </div>
    );
}

CurrencyCard.propTypes = {
    faicon: PropTypes.string,
    currency: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    currencySymbol: PropTypes.string.isRequired,
};

CurrencyCard.defaultProps = {
    amount:'100.00'
  };

export default CurrencyCard;