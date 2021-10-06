import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import pic1 from '../../assets/carousel/pic1.jpg';
import pic2 from '../../assets/carousel/pic2.jpg';
import './Carousel.scss';

const NewCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      transitionTime={1000}
      swipeable={false}
      showArrows={false}
      showStatus={false}
    >
      <div>
        <img src={pic1} alt='Carousel' />
      </div>
      <div>
        <img src={pic2} alt='Carousel' />
      </div>
    </Carousel>
  );
};

export default NewCarousel;
