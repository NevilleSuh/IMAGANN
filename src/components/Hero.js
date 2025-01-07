import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure this is correct if you have global styles

function Hero() {
    return (
        <section style={{
            padding: '4rem 2rem',
            textAlign: 'center',
            backgroundColor: '#f7f7f7',
            // height: 'calc(100vh - 8rem)',
            height: '5cm',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden', // Hide overflow if necessary
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
        }}>
            <div className='heroContents'>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '1rem',
                }}>Welcome To IMAGANN</h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#666',
                    marginBottom: '2rem',
                }}>"Where Imaginations meets Annotations..."</p>
                <Link to='/AnnotationPlatform'>
                    <button style={{
                        padding: '0.3rem 0.8rem',
                        fontSize: '1rem',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s, transform 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                    >
                        Get Started
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Hero;