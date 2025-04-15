import React from 'react';
import './css/ProjectCard.css';

const ProjectCard = ({title, img, onPress}) => {
    return <div className='col-lg-4 col-md-12 col-sm-12 px-3 mt-4 d-flex flex-column align-items-center'>
        <h2 className='mb-2'>{title}</h2>
        <img className='project-card-img' src={img} />
        <button className='primary-button-open mt-3' onClick={onPress}>Entrar</button>
    </div>;
}

export default ProjectCard;