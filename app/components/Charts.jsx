import React from 'react';
import Linechart from './LineChart.jsx';

const Charts = () => {
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
                // notice the gap in the data and the spanGaps: true
                data: [65, 59, 80, 81, 56, 55, 40],
            }
        ]
    };
    const BtcEthData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
                data: [480, 430, 450, 358, 80, 150, 500],
            },
            {
                label: 'Etherum',
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(167,105,0,0.4)",
                borderColor: "rgb(167, 105, 0)",
                borderCapStyle: 'butt',
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
            }
        ]
    };
    return (
        <div className="main-wrapper">
            <div className="chart-container">
                <div className="dolar-today-data">
                    <Linechart chartData={dolarTodaydata} label="DolarToday" />
                </div>
                <div className="btc-eth-data">
                <Linechart chartData={BtcEthData} label="bitcoin - Etherum" />
            </div>
            </div>
        </div>
    );
}

export default Charts;