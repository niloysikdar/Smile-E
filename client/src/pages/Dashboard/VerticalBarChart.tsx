import { Bar } from 'react-chartjs-2';

const data = {
	labels: ['2018', '2019', '2020', '2021'],
	datasets: [
		{
			label: '# Number of children',
			data: [120, 150, 130, 190],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(153, 102, 255, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(153, 102, 255, 1)',
			],
			borderWidth: 1,
		},
	],
};

const options = {
	maintainAspectRatio: true,
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
};

const VerticalBarChart = () => {
	return (
		<>
			<h4 style={{ fontWeight: 'normal', fontSize: '1.1rem' }}>
				Total number of students whom we provided free education
			</h4>
			<Bar data={data} options={options} />
		</>
	);
};

export { VerticalBarChart };
