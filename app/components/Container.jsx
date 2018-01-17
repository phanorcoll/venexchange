import React, { Component } from 'react';
import CurrencyCard from './CurrencyCard.jsx';
import Eth from '../images/ETH.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dtData, cryptoCurrencyData, bitcoinCurrentData, ethereumCurrentData } from '../actions/actions.jsx';
import LoadingComponent from './Loading.jsx';

class Container extends Component {

    componentWillMount() {
        this.props.fetchDtData();
        this.props.fetchBitcoinData();
        this.props.fetchEthereumData();
    }

    render() {


        return (
            <div className="main-wrapper">
                <div className="card-wrapper">
                    <div className="dolartoday">
                        {
                            (this.props.dtValue["USD"]) ?
                                <CurrencyCard faicon="fa-usd" currency="dolartoday" title="Dolartoday" currencySymbol="Bs." price={this.props.dtValue["USD"].dolartoday} /> :
                                <LoadingComponent text='Cargando DolarToday data...!' />
                        }
                    </div>
                    <div className="bitcoin">
                        {
                            (this.props.bitcoinData["last"]) ?
                                <CurrencyCard faicon="fa-btc" currency="bitcoin" title="Bitcoin" currencySymbol="$" price={this.props.bitcoinData["last"]} /> :
                                <LoadingComponent text='Cargando bitcoin data...!' />
                        }
                    </div>
                    <div className="etherium">
                        {
                            (this.props.ethereumData["last"]) ?
                                <CurrencyCard currencyIcon={Eth} currency="etherum" title="Ethereum" currencySymbol="$" price={this.props.ethereumData["last"]} /> :
                                <LoadingComponent text='Cargando ethereum data...!' />
                        }

                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchDtData: dtData,
        fetchBitcoinData: bitcoinCurrentData,
        fetchEthereumData: ethereumCurrentData
    }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        dtValue: state.dt,
        bitcoinData: state.bitcoinCurrentData,
        ethereumData: state.ethereumCurrentData
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Container);