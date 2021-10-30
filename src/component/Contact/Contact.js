import React from 'react';
import { Container } from 'react-bootstrap';
import b1 from '../../Image/banner/b1.png';
import './Contact.css'


const Contact = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${b1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

         }} className="text-center">
            <Container className="p-5">
                <div className="p-5">
                    <h1 className="text-size-one text-light"><span className="text-warning"> The World </span>Calling you</h1>
                    <h1 className="text-size-two text-light "> <span className="text-warning" >Call Now :</span> +1234567998</h1>

                    
                </div>
            </Container>
        </div>
    );
};

export default Contact;