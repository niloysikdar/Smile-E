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
          <div className='chartDiv'>
            <VerticalBarChart />
          </div>
          <div className='chartDiv' style={{ marginTop: '20px' }}>
            <HorizontalBarChart />
          </div>
        </div>

        <div className='piechart'>
          <h4>% of overall people whom we helped</h4>
          <div className='piechartdiv'>
            <Piechart />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
