import { useEffect, useState } from 'react';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import PropTypes from 'prop-types';

Chart.register(ChartDataLabels);

const PieChart = ({answersLists}) => {
    const [optionCounts, setOptionCounts] = useState({
        'Sangat Setuju': 0,
        'Cukup Setuju': 0,
        'Netral': 0,
        'Kurang Setuju': 0,
        'Tidak Setuju': 0,
    });

    useEffect(() => {
        const answers = answersLists;

        if (answers && answers.length > 0) {
            const counts = answers.reduce((accumulator, count) => {
                accumulator[count] = (accumulator[count] || 0) + 1;
                return accumulator;
            }, {});
            
            //combines prevCounts to a new "counts"
            setOptionCounts(prevCounts => ({
                ...prevCounts,
                ...counts,
              }));
        }
    }, [answersLists]);

    useEffect(() => {
        console.log(answersLists)
    }, [optionCounts]);

    const data = {
        labels: ['Sangat Setuju', 'Cukup Setuju', 'Netral', 'Kurang Setuju', 'Tidak Setuju'],
        datasets: [{
            label : 'answer',
            data: Object.values(optionCounts),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
            borderColor: 'black',
            borderWidth: 1.5,
        }],
    };
    
    const options = {
        indexAxis: 'y',
        scales: {
            x: {
              display: false,
            },
            y: {
                display: false,
                ticks: {font: {
                    size: 16,       
                    weight: 'bold', 
                }}, 
            },
        },
        plugins: {
            legend: { display: true },
            datalabels: {
                anchor: 'end',
                align: 'end',
                font: {
                    size: 16,       // Set the font size
                    weight: 'bold', // Set the font weight (e.g., 'normal', 'bold')
                },
                formatter: (value, context) => {
                    const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                    const percentage = ((value / total) * 100).toFixed(2) + '%';
                    return percentage;
                },
                color: 'black',
            }
        },
        layout: {
            padding: 24
        },
    };
    
    return (
        <div className='piechart'>
            <Pie data={data} options={options} />
        </div>
    )
};

PieChart.propTypes = {
    answersLists: PropTypes.array.isRequired
};

export default PieChart;