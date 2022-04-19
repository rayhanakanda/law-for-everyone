import React from 'react';
import Slider from '../Home/Slider/Slider'
import ReviewPage from '../Review/ReviewPage';
import Footer from '../Shared/Footer/Footer';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <ReviewPage></ReviewPage>
        </div>
    );
};

export default Home;