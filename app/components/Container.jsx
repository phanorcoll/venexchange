import React, { Component } from 'react';
import CurrencyCard from './CurrencyCard.jsx';
import Eth from '../images/ETH.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dtData, cryptoCurrencyData } from '../actions/actions.jsx';
import LoadingComponent from './Loading.jsx';

class Container extends Component {

    componentWillMount() {
        this.props.fetchDtData();
        this.props.fetchCryptoCurrencyData();
    }

    render() {

        if (this.props.cryptoCurrencyValue[0] === undefined || this.props.dtValue["USD"] === undefined) {
            return <div className="main-wrapper"><LoadingComponent text='Cargando data...!' /></div>
        }

        return (
            <div className="main-wrapper">
                <div className="card-wrapper">
                    <div className="dolartoday">
                        <CurrencyCard faicon="fa-usd" currency="dolartoday" title="Dolartoday" currencySymbol="Bs." price={this.props.dtValue["USD"].dolartoday} />
                    </div>
                    <div className="bitcoin">
                        <CurrencyCard faicon="fa-btc" currency={this.props.cryptoCurrencyValue[0].id} title={this.props.cryptoCurrencyValue[0].name} currencySymbol="USD." price={this.props.cryptoCurrencyValue[0].price_usd} />
                    </div>
                    <div className="etherium">
                        <CurrencyCard currencyIcon={Eth} currency={this.props.cryptoCurrencyValue[1].id} title={this.props.cryptoCurrencyValue[1].name} currencySymbol="USD." price={this.props.cryptoCurrencyValue[1].price_usd} />
                    </div>
                </div>
            </div>
        );
    }
}


//export default Container;


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchDtData: dtData,
        fetchCryptoCurrencyData: cryptoCurrencyData
    }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        dtValue: state.dt,
        cryptoCurrencyValue: state.cryptoCurrency,
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Container);