import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { UserType } from '../../types/UserType';

import { getUsers } from '../../api/getUsers';
import { Card } from './Card';
import './partnership.scss';

const Partnership = () => {
  const [partners, setPartners] = useState<UserType[]>([]);
  const [volunteers, setVolunteer] = useState<UserType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getUsers();
    if (result.status === 200) {
      const data: UserType[] = result.data;
      setPartners(data.filter((item) => item.role !== 'Volunteer'));
      setVolunteer(data.filter((item) => item.role === 'Volunteer'));
    }
  };

  return (
    <div className='partnership'>
      <h2>Partner with or Join us as Volunteer</h2>
      {localStorage.getItem('isLoggedIn') === 'true' && (
        <Link to='/agreement' className='button-to-agreement'>
          Send the E-Agreement
        </Link>
      )}

      <div className='card-container'>
        <div className='partnership-content'>
          <h3>Our Volunteers :</h3>
          <div className='cards'>
            {volunteers.map((user) => (
              <Card key={user._id} name={user.name} joined={user.joined} />
            ))}
          </div>
        </div>

        <div className='partnership-content'>
          <h3>Our Partners :</h3>
          <div className='cards'>
            {partners.map((user) => (
              <Card key={user._id} name={user.name} joined={user.joined} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Partnership };
