import { Bar } from 'react-chartjs-2';

const data = {
	labels: ['2018', '2019', '2020', '2021'],
	datasets: [
		{
			label: '# People',
			data: [1500, 2000, 1800, 3200],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		},
	],
};

const options = {
	indexAxis: 'y',
	elements: {
		bar: {
			borderWidth: 2,
		},
	},
	responsive: true,
	plugins: {
		legend: {
			position: 'right',
		},
	},
};

const HorizontalBarChart = () => {
	return (
		<>
			<h4 style={{ fontWeight: 'normal', fontSize: '1.1rem' }}>Total number of people whom we helped</h4>
			<Bar data={data} options={options} />
		</>
	);
};

export { HorizontalBarChart };
