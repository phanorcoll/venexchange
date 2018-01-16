import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bitcoinHistory } from '../actions/actions.jsx';
import LoadingComponent from './Loading.jsx';
import { Chart } from 'react-google-charts';

class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            optionsCryptoCurrencyHistory: {
                title: 'Precios en USD ($) Bitcoin - Etherum',
                "hAxis": { "title": "Fecha" },
                "vAxis": { "title": "USD $" },
                legend: true,
            },
            columnsCryptoCurrencyHistory: [
                { "label": "Fechas", "type": "string" },
                { "label": "Bitcoin", "type": "number" },
                { "label": "Etherum", "type": "number" }
                
            ],
            optionsDolarToday: {
                title: 'Precios en Bolivares (Bs.) Dolartoday',
                "hAxis": { "title": "Fecha" },
                "vAxis": { "title": "Bs." },
                legend: 'none',
            },
            rows: [
                ['2017-12-15', 17601.9438],
                ['2017-12-16', 12629.8138]

            ],
            columnsDolarToday: [
                { "label": "Fechas", "type": "string" },
                { "label": "Bs", "type": "number" }
            ],
        };
    }

    componentWillMount() {
        this.props.fetchbitcoinHistory();
    }

    render() {
        return (
            <div className="main-wrapper">
                <div className="chart-container">
                    <div className="dolar-today-data card">
                        <div className="btc-eth-data card">
                            <Chart
                                chartType="LineChart"
                                rows={this.state.rows}
                                columns={this.state.columnsDolarToday}
                                options={this.state.optionsDolarToday}
                                graph_id="LineChart1"
                                width={'100%'}
                                height={'400px'}
                                legend_toggle
                            />
                        </div>
                    </div>
                    <div className="btc-eth-data card">
                        <Chart
                            chartType="LineChart"
                            rows={this.props.bitcoinHistory}
                            columns={this.state.columnsCryptoCurrencyHistory}
                            options={this.state.optionsCryptoCurrencyHistory}
                            graph_id="LineChart2"
                            width={'100%'}
                            height={'400px'}
                            legend_toggle
                        />
                    </div>
                </div>
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
