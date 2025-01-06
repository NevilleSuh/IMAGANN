import React from 'react';
import { Link } from 'react-router-dom';

function Hero(){
    // const navigate = useNavigate();

    return(
        <section style={{padding: '2rem', textAlign: 'center', backgroundColor: '#f7f7f7', height: '4cm'}}>
            <div className='heroContents'>
                <h1>Welcome To IMAGANN</h1>
                <p>Explore our digitalized world</p>
                <Link to='/AnnotationPlatform'>
                    <button style={{padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '20%'}}>
                    Get Started
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Hero;
