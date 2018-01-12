import React, { Component } from 'react';
import CurrencyCard from './CurrencyCard.jsx';
import Eth from '../images/ETH.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dtData } from '../actions/actions.jsx';

class Container extends Component {

    componentDidMount() {
        this.props.fetchDtData();
    }

    render() {
        return (
            <div className="main-wrapper">
                <div className="card-wrapper">
                    <div className="dolartoday">
                        <CurrencyCard faicon="fa-usd" currency="dolartoday" title="Dolartoday" currencySymbol="Bs." amount={this.props.dtValue} />
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
}


//export default Container;


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchDtData: dtData
    }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        dtValue : state.dt
     }
}



export default connect(mapStateToProps, mapDispatchToProps)(Container);