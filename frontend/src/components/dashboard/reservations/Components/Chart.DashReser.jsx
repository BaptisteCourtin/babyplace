import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import { useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export function Chart({ maxPlaces }) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Places reservées',
            },
        },
    };

    let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let currentMonth = new Date().getMonth()
    let currentYear = new Date().getYear()
    const labels = months.slice(currentMonth).concat(months.slice(0, currentMonth))

    const [daysArr, setDaysArr] = useState([])
    const [newArr, setNewArr] = useState([])
    const getDays = () => {
        let counter = 1
        for (let i = 0; i < months.length; i++) {
            let month = counter++
            let pushedValue = new Date(currentYear, month, 0).getDate()
            daysArr.push(pushedValue)
        }
        setNewArr(daysArr.map(d => (~~d * maxPlaces)).slice(0, 12))
    };

    useEffect(() => {
        getDays();
    }, [])

    const data = {
        labels,
        datasets: [
            {
                label: 'Places ',
                data: daysArr.map(d => d * maxPlaces),
                backgroundColor: 'rgba(126, 114, 242, 0.5)',
            }
        ],
    };

    return <Bar options={options} data={data} />;
}
