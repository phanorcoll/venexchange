import React, { Component } from 'react';
import Linechart from './LineChart.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bitcoinHistory } from '../actions/actions.jsx';
import LoadingComponent from './Loading.jsx';
import _ from 'lodash';
import numeral from 'numeral';
class Charts extends Component {

    componentWillMount() {
        this.props.fetchbitcoinHistory();
    }

    render() {
        let bpi = this.props.bitcoinHistory["bpi"];
        let btlabels = [];
        let btPrice = [];
        if (bpi !== undefined) {
            _.map(bpi, (k, v) => {
                //console.log(k);
                btPrice.push(k)
                btlabels.push(v)
            });
        }
        const dolarTodaydata = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'DolarToday',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(225,0,0,0.4)",
                    borderColor: "red", // The main line color
                    borderCapStyle: 'square',
                    borderDash: [], // try [5, 15] for instance
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "black",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "yellow",
                    pointHoverBorderColor: "brown",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                }
            ]
        };
        const BtcEthData = {
            //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            labels: btlabels,
            datasets: [
                {
                    label: 'bitcoin',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#fff',
                    borderColor: '#1BCB23',
                    borderCapStyle: 'butt',
                    borderWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBorderColor: '#000',
                    pointBorderWidth: 7,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: '#1BCB23',
                    pointHoverBorderColor: '#1BCB23',
                    pointHoverBorderWidth: 1,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: btPrice,
                },
                /* {
                    label: 'Etherum',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(167,105,0,0.4)",
                    borderColor: "rgb(167, 105, 0)",
                    borderCapStyle: 'connectbutt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "white",
                    pointBackgroundColor: "black",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "brown",
                    pointHoverBorderColor: "yellow",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    data: [500, 150, 80, 358, 450, 430, 480],
                } */
            ]
        };
        return (
            <div className="main-wrapper">
                <div className="chart-container">
                    <div className="dolar-today-data card">
                        <Linechart chartData={dolarTodaydata} label="DolarToday" />
                    </div>
                    <div className="btc-eth-data card">
                        <Linechart chartData={BtcEthData} label="bitcoin - Etherum" />
                    </div>
                </div>
                <div id="chartjs-tooltip"></div>
            </div>
        );
    }
}
//export default Charts;

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchbitcoinHistory: bitcoinHistory
    }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        bitcoinHistory: state.bitcoinHistory
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Charts);
