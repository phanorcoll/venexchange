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
            options: {
                /* "hAxis": { "title": "Fecha" }, */
                "vAxis": { "title": "Bitcoin - Etherum" },
                legend: 'none',
            },
            rows: [
                ['2017-12-15', 17601.9438],
                ['2017-12-16', 12629.8138]

            ],
            columns: [
                { "label": "Fechas", "type": "string" },
                { "label": "Precio", "type": "number" }
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
                        dolarToday
                    </div>
                    <div className="btc-eth-data card">
                        <Chart
                            chartType="LineChart"
                            rows={this.props.bitcoinHistory}
                            columns={this.state.columns}
                            options={this.state.options}
                            graph_id="LineChart"
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
