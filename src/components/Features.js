import React from 'react';

function Features(){
    const features = [
        {id: 1, title: 'Image Annotation', description: 'Detect various objects on your uploaded images..'},
        {id: 2, title: 'Video Annotation', description: 'Detect various objects on your uploaded videos..'},
        {id: 3, title: 'More Features', description: 'Get started to access to more features..'}
    ];

    return(
        <section style={{padding: '2rem', backgroundColor: '#fff', height: '9cm'}}>
            <h2>Our Features</h2>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '5rem'}}>
                {features.map((feature)=>(
                    <div key={feature.id} style={{textAlign: 'center', margin: '1rem'}}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;
