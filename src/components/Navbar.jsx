/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

export default function Navbar({ handleLightmode, mode }) {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) setScroll(true);
    else setScroll(false);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleNavHide = ({ currentTarget }) => {
    const id = currentTarget.innerText.toLowerCase();
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top;
    window.scrollBy({
      top: elementPosition - 60,
    });
    setShow(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='sticky-container'>
      <div className={'scrollup' + (scroll ? ' show' : '')} onClick={scrollUp}>
        <i className='fas fa-chevron-up'></i>
      </div>
      <nav id='nav' className={scroll ? 'scroll' : ''}>
        <div className='container'>
          <div className='nav-brand'>Basharath</div>
          <div className='nav-toggler' onClick={() => setShow(!show)}>
            <i className={'fas ' + (show ? 'fa-times' : 'fa-bars')}></i>
          </div>
          <div className={'nav-collapse' + (show ? ' show' : '')}>
            <ul className='navbar'>
              <li className='nav-item' onClick={handleNavHide}>
                <span className='nav-link'>Home</span>
              </li>
              <li className='nav-item' onClick={handleNavHide}>
                <span className='nav-link'>Skills</span>
              </li>
              <li className='nav-item' onClick={handleNavHide}>
                <span className='nav-link'>Projects</span>
              </li>
              <li className='nav-item'>
                <a
                  className='external-link'
                  href='https://devapt.com'
                  target='_blank'
                >
                  <span className='nav-link'>Blog</span>
                </a>
              </li>
              <li className='nav-item' onClick={handleNavHide}>
                <span className='nav-link'>Contact</span>
              </li>
              <span
                className='mode'
                onClick={() => setShow(false)}
                title='Click to change the light mode'
              >
                <i
                  className={'fas fa-' + (mode ? 'moon' : 'sun')}
                  onClick={handleLightmode}
                ></i>
              </span>
            </ul>

            <div className='social-icons'>
              <a
                href='https://twitter.com/hashBender'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                href='https://github.com/basharath'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-github'></i>
              </a>
              <a
                href='https://stackoverflow.com/users/14894918/hashbender'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-stack-overflow'></i>
              </a>
              <a
                href='https://linkedin.com/in/basharathonline'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
