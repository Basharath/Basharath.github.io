import React from 'react';

import projects from '../data';

export default function Projects() {
  const Card = ({ image, title, description, demoUrl, git, info = '' }) => (
    <div className='card'>
      <a href={demoUrl} target='_blank' rel='noopener noreferrer'>
        <img src={image} alt={title.split(' ').join('-')} />
      </a>
      <div className='card_body'>
        <div className='title'>{title}</div>
        <p className='description'>{description}</p>
        <div className='card_footer'>
          <div className='tag'>
            <a href={demoUrl} target='_blank' rel='noopener noreferrer'>
              <i className='fas fa-external-link-alt'></i> Live
            </a>
          </div>
          {info && (
            <div className='tag'>
              <a href={info} target='_blank' rel='noopener noreferrer'>
                <i className='fas fa-info-circle'></i> Info
              </a>
            </div>
          )}
          {git && (
            <div className='tag'>
              <a href={git} target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-github'></i> Source
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className='projects' id='projects'>
      <div className='heading'>Projects</div>
      <div className='container'>
        {projects.map((p, idx) => (
          <Card
            image={p.image}
            title={p.title}
            description={p.description}
            demoUrl={p.demoUrl}
            git={p.git}
            info={p.info}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
}
