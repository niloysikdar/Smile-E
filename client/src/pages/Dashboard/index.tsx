import { VerticalBarChart } from './VerticalBarChart';
import { HorizontalBarChart } from './HorizontalBarChart';
import { Piechart } from './Piechart';
import './dashboard.scss';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<h2>Dashboard</h2>
			<div className='charts'>
				<div className='barcharts'>
					<div style={chartDivStyle}>
						<VerticalBarChart />
					</div>
					<div style={{ ...chartDivStyle, marginTop: '20px' }}>
						<HorizontalBarChart />
					</div>
				</div>

				<div className='piechart'>
					<h3 style={{ fontWeight: 'normal', fontSize: '1.3rem' }}>% of overall people whom we helped</h3>
					<div style={{ width: '600px', height: '50vh' }}>
						<Piechart />
					</div>
				</div>
			</div>
		</div>
	);
};

const chartDivStyle = { width: '550px' };

export { Dashboard };
