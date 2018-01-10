import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {
    return (
        <Line
            data={props.chartData}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: `${props.label}`,
                            fontSize: 20
                        }
                    }]
                }
            }}
        />
    );
}

export default LineChart;