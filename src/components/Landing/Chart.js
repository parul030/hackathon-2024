import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    // title: {
    //     // text: 'Logarithmic axis demo',
    // },
    // xAxis: {
    //     tickInterval: 1,
    //     type: 'logarithmic',
    //     accessibility: {
    //         rangeDescription: 'Range: 1 to 36',
    //     },
    // },
    XAxis: {
        // type: 'logarithmic',
        tickInterval: 1,
        accessibility: {
            rangeDescription: 'Range: 1 to 36',
        },
    },
    // tooltip: {
    //     headerFormat: '<b>{series.name}</b><br />',
    //     pointFormat: 'x = {point.x}, y = {point.y}',
    // },
    series: [
        {
            name: 'Series 1',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
            pointStart: 0,
        },
        {
            name: 'Series 2',
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
            pointStart: 0,
        },
    ],
};

const MyChartComponent = () => (
    <HighchartsReact  highcharts={Highcharts} options={options} />
);

export default MyChartComponent;