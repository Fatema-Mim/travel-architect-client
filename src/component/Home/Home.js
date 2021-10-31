import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Packages from '../Packages/Packages';
import UpTOEvent from '../UpToEvent/UpTOEvent';

const Home = () => {
  
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Contact></Contact>
            <UpTOEvent></UpTOEvent>
        </div>
    );
};

export default Home;