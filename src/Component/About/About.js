import React, { useState, useEffect} from 'react'

import axios from 'axios';

import './About.css'

function About(){
    const [information, setInformation] = useState({});
    useEffect(()=> {
            axios.get('https://backportfolio.herokuapp.com/about')
            .then(
                res => setInformation(res.data[0])
            )
    })
    return(
        <div className='About'>
            <div className='div-foto'>
                <img className='foto-perfil' src={information.photo} alt='Foto de perfil'></img>
            </div>
            <div className='Descripcion'>
                <h1>
                    {information.name}
                </h1>
                <h2>
                    {information.profession}
                </h2>
                <p>
                    {information.about_me}
                </p>
                <ul className='skills'>
                    {information.skills && information.skills.map((skill, index) => 
                            <p className='skill'>{skill}</p>
                    )}
                </ul>
            </div>
        </div>
    )
};
export default About;